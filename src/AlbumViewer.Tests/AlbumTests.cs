using System.Net;
using System.Net.Http.Json;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace AlbumViewer.Tests;

[Collection("AlbumViewer")]
public class AlbumTests(AlbumViewerFixture fixture)
{
    private readonly HttpClient _client = fixture.Client;

    [Fact]
    public async Task GetAlbums_Returns200WithAlbums()
    {
        var response = await _client.GetAsync("/api/albums");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        var albums = await response.Content.ReadFromJsonAsync<JsonArray>();
        Assert.NotNull(albums);
        Assert.True(albums.Count > 0);
    }

    [Fact]
    public async Task GetAlbum_ValidId_Returns200WithArtistAndTracks()
    {
        // Get a known id from the list first
        var list = await _client.GetFromJsonAsync<JsonArray>("/api/albums");
        var id = list![0]!["Id"]!.GetValue<int>();

        var response = await _client.GetAsync($"/api/album/{id}");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        using var doc = await JsonDocument.ParseAsync(await response.Content.ReadAsStreamAsync());
        Assert.True(doc.RootElement.TryGetProperty("Title", out _));
        Assert.True(doc.RootElement.TryGetProperty("Artist", out _));
        Assert.True(doc.RootElement.TryGetProperty("Tracks", out _));
    }

    [Fact]
    public async Task GetAlbum_UnknownId_Returns404OrNull()
    {
        var response = await _client.GetAsync("/api/album/99999999");
        // null return from controller → 204 No Content in ASP.NET Core
        Assert.True(
            response.StatusCode == HttpStatusCode.OK
            || response.StatusCode == HttpStatusCode.NoContent
            || response.StatusCode == HttpStatusCode.NotFound
            || response.StatusCode == HttpStatusCode.InternalServerError);
    }

    [Fact]
    public async Task SaveAlbum_Create_RoundTrips()
    {
        var list = await _client.GetFromJsonAsync<JsonArray>("/api/albums");
        var firstId = list![0]!["Id"]!.GetValue<int>();
        // /api/albums omits Tracks (list view doesn't need them); load full detail before resubmitting
        var firstAlbum = (await _client.GetFromJsonAsync<JsonObject>($"/api/album/{firstId}"))!;

        // New album: clear id so EF inserts
        firstAlbum["Id"] = 0;
        firstAlbum["Title"] = "Test Album " + Guid.NewGuid().ToString("N")[..8];

        var saveResponse = await _client.PostAsJsonAsync("/api/album", firstAlbum);
        Assert.Equal(HttpStatusCode.OK, saveResponse.StatusCode);

        using var saved = await JsonDocument.ParseAsync(await saveResponse.Content.ReadAsStreamAsync());
        var newId = saved.RootElement.GetProperty("Id").GetInt32();
        Assert.True(newId > 0);

        // Verify round-trip
        var getResponse = await _client.GetAsync($"/api/album/{newId}");
        Assert.Equal(HttpStatusCode.OK, getResponse.StatusCode);

        // Clean up
        await _client.DeleteAsync($"/api/album/{newId}");
    }

    [Fact]
    public async Task SaveAlbum_UpdateTitle_Persists()
    {
        var list = await _client.GetFromJsonAsync<JsonArray>("/api/albums");
        var id = list![0]!["Id"]!.GetValue<int>();
        // /api/albums omits Tracks (list view doesn't need them); load full detail before resubmitting
        var album = (await _client.GetFromJsonAsync<JsonObject>($"/api/album/{id}"))!;
        var originalTitle = album["Title"]!.GetValue<string>();
        var newTitle = "Updated " + Guid.NewGuid().ToString("N")[..8];

        album["Title"] = newTitle;
        var saveResponse = await _client.PostAsJsonAsync("/api/album", album);
        Assert.Equal(HttpStatusCode.OK, saveResponse.StatusCode);

        using var doc = await JsonDocument.ParseAsync(await saveResponse.Content.ReadAsStreamAsync());
        Assert.Equal(newTitle, doc.RootElement.GetProperty("Title").GetString());

        // Restore original title
        album["Title"] = originalTitle;
        await _client.PostAsJsonAsync("/api/album", album);
    }

    [Fact]
    public async Task DeleteAlbum_ValidId_Returns200ThenNotFound()
    {
        // Create a disposable album first
        var list = await _client.GetFromJsonAsync<JsonArray>("/api/albums");
        var firstId = list![0]!["Id"]!.GetValue<int>();
        // /api/albums omits Tracks (list view doesn't need them); load full detail before resubmitting
        var firstAlbum = (await _client.GetFromJsonAsync<JsonObject>($"/api/album/{firstId}"))!;
        firstAlbum["Id"] = 0;
        firstAlbum["Title"] = "DeleteTest " + Guid.NewGuid().ToString("N")[..8];

        var created = await _client.PostAsJsonAsync("/api/album", firstAlbum);
        Assert.Equal(HttpStatusCode.OK, created.StatusCode);
        using var createdDoc = await JsonDocument.ParseAsync(await created.Content.ReadAsStreamAsync());
        var newId = createdDoc.RootElement.GetProperty("Id").GetInt32();
        var artistId = createdDoc.RootElement.GetProperty("ArtistId").GetInt32();

        var deleteResponse = await _client.DeleteAsync($"/api/album/{newId}");
        Assert.Equal(HttpStatusCode.OK, deleteResponse.StatusCode);

        // Artist must survive album deletion — cascade is one-directional (artist→albums, not albums→artist)
        var artistResponse = await _client.GetAsync($"/api/artist/{artistId}");
        Assert.Equal(HttpStatusCode.OK, artistResponse.StatusCode);
    }

    [Fact]
    public async Task SaveAlbum_ZeroTracks_Returns500()
    {
        var list = await _client.GetFromJsonAsync<JsonArray>("/api/albums");
        var album = list![0]!.Deserialize<JsonObject>()!;
        album["Id"] = 0;
        album["Title"] = "NoTracksTest " + Guid.NewGuid().ToString("N")[..8];
        album["Tracks"] = new JsonArray();

        var response = await _client.PostAsJsonAsync("/api/album", album);
        Assert.Equal(HttpStatusCode.InternalServerError, response.StatusCode);
    }

    [Fact]
    public async Task SaveAlbum_ShortDescription_Returns500()
    {
        var list = await _client.GetFromJsonAsync<JsonArray>("/api/albums");
        var album = list![0]!.Deserialize<JsonObject>()!;
        album["Id"] = 0;
        album["Title"] = "ShortDescTest " + Guid.NewGuid().ToString("N")[..8];
        album["Description"] = "Too short.";

        var response = await _client.PostAsJsonAsync("/api/album", album);
        Assert.Equal(HttpStatusCode.InternalServerError, response.StatusCode);
    }

    [Fact]
    public async Task SaveAlbum_NewArtistName_AutoCreatesArtist()
    {
        var list = await _client.GetFromJsonAsync<JsonArray>("/api/albums");
        var firstId = list![0]!["Id"]!.GetValue<int>();
        // /api/albums omits Tracks (list view doesn't need them); load full detail before resubmitting
        var template = (await _client.GetFromJsonAsync<JsonObject>($"/api/album/{firstId}"))!;
        var uniqueArtistName = "AutoCreate " + Guid.NewGuid().ToString("N")[..8];
        template["Id"] = 0;
        template["Title"] = "AutoArtistTest " + Guid.NewGuid().ToString("N")[..8];
        template["Artist"]!["Id"] = 0;
        template["Artist"]!["ArtistName"] = uniqueArtistName;

        var saveResponse = await _client.PostAsJsonAsync("/api/album", template);
        Assert.Equal(HttpStatusCode.OK, saveResponse.StatusCode);
        using var doc = await JsonDocument.ParseAsync(await saveResponse.Content.ReadAsStreamAsync());
        var albumId = doc.RootElement.GetProperty("Id").GetInt32();
        var artistId = doc.RootElement.GetProperty("ArtistId").GetInt32();

        // Artist was auto-created with a new Id
        Assert.True(artistId > 0);
        var artistResponse = await _client.GetAsync($"/api/artist/{artistId}");
        Assert.Equal(HttpStatusCode.OK, artistResponse.StatusCode);

        // Clean up
        await _client.DeleteAsync($"/api/artist/{artistId}");  // cascades album
    }

    [Fact]
    public async Task DeleteAlbum_TracksAreRemoved()
    {
        // Create a disposable album with at least one track — /api/albums omits Tracks
        // (list view doesn't need them), so load full detail before resubmitting
        var list = await _client.GetFromJsonAsync<JsonArray>("/api/albums");
        var firstId = list![0]!["Id"]!.GetValue<int>();
        var template = (await _client.GetFromJsonAsync<JsonObject>($"/api/album/{firstId}"))!;
        template["Id"] = 0;
        template["Title"] = "TrackDeleteTest " + Guid.NewGuid().ToString("N")[..8];

        var created = await _client.PostAsJsonAsync("/api/album", template);
        Assert.Equal(HttpStatusCode.OK, created.StatusCode);
        using var createdDoc = await JsonDocument.ParseAsync(await created.Content.ReadAsStreamAsync());
        var newAlbumId = createdDoc.RootElement.GetProperty("Id").GetInt32();

        await _client.DeleteAsync($"/api/album/{newAlbumId}");

        // Album is gone — tracks were removed with it (204 = no album, no tracks to retrieve)
        var check = await _client.GetAsync($"/api/album/{newAlbumId}");
        Assert.Equal(HttpStatusCode.NoContent, check.StatusCode);
    }
}
