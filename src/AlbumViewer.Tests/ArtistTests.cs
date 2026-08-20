using System.Net;
using System.Net.Http.Json;
using System.Text.Json;
using System.Text.Json.Nodes;
using AlbumViewerBusiness;

namespace AlbumViewer.Tests;

[Collection("AlbumViewer")]
public class ArtistTests(AlbumViewerFixture fixture)
{
    private readonly HttpClient _client = fixture.Client;

    [Fact]
    public async Task GetArtists_Returns200WithArtists()
    {
        var response = await _client.GetAsync("/api/artists");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        var artists = await response.Content.ReadFromJsonAsync<JsonArray>();
        Assert.NotNull(artists);
        Assert.True(artists.Count > 0);
    }

    [Fact]
    public async Task GetArtist_ValidId_Returns200WithAlbums()
    {
        var list = await _client.GetFromJsonAsync<JsonArray>("/api/artists");
        var id = list![0]!["Id"]!.GetValue<int>();

        var response = await _client.GetAsync($"/api/artist/{id}");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        using var doc = await JsonDocument.ParseAsync(await response.Content.ReadAsStreamAsync());
        // GetArtist returns ArtistResponse { Artist, Albums }
        Assert.True(doc.RootElement.TryGetProperty("Artist", out var artist));
        Assert.True(artist.TryGetProperty("ArtistName", out _));
        Assert.True(doc.RootElement.TryGetProperty("Albums", out _));
    }

    [Fact]
    public async Task GetArtist_UnknownId_Returns404OrNull()
    {
        var response = await _client.GetAsync("/api/artist/99999999");
        // Artist controller returns 404 for unknown id (differs from album which returns 204)
        Assert.True(
            response.StatusCode == HttpStatusCode.NotFound ||
            response.StatusCode == HttpStatusCode.NoContent);
    }

    [Fact]
    public async Task ArtistLookup_ReturnsFilteredResults()
    {
        var response = await _client.GetAsync("/api/artistlookup?search=the");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        var results = await response.Content.ReadFromJsonAsync<List<ArtistLookupItem>>();
        Assert.NotNull(results);
        Assert.NotEmpty(results);
        Assert.All(results, r =>
        {
            Assert.True(r.id > 0, "ArtistLookupItem.id must be the artist's real numeric Id, not the name");
            Assert.False(string.IsNullOrEmpty(r.name));
        });
    }

    [Fact]
    public async Task SaveArtist_Create_RoundTrips()
    {
        var newArtist = new JsonObject
        {
            ["Id"] = 0,
            ["ArtistName"] = "Test Artist " + Guid.NewGuid().ToString("N")[..8],
            ["Description"] = "Integration test artist created by the automated test suite.",
            ["ImageUrl"] = "",
            ["AmazonUrl"] = "",
            ["Albums"] = new JsonArray()
        };

        var saveResponse = await _client.PostAsJsonAsync("/api/artist", newArtist);
        Assert.Equal(HttpStatusCode.OK, saveResponse.StatusCode);

        // SaveArtist returns ArtistResponse { Artist, Albums }
        using var saved = await JsonDocument.ParseAsync(await saveResponse.Content.ReadAsStreamAsync());
        var newId = saved.RootElement.GetProperty("Artist").GetProperty("Id").GetInt32();
        Assert.True(newId > 0);

        var getResponse = await _client.GetAsync($"/api/artist/{newId}");
        Assert.Equal(HttpStatusCode.OK, getResponse.StatusCode);

        await _client.DeleteAsync($"/api/artist/{newId}");
    }

    [Fact]
    public async Task SaveArtist_UpdateName_Persists()
    {
        var list = await _client.GetFromJsonAsync<JsonArray>("/api/artists");
        var artist = list![0]!.Deserialize<JsonObject>()!;
        var id = artist["Id"]!.GetValue<int>();
        var originalName = artist["ArtistName"]!.GetValue<string>();
        var newName = "Updated " + Guid.NewGuid().ToString("N")[..8];

        artist["ArtistName"] = newName;
        if (!artist.ContainsKey("Albums"))
            artist["Albums"] = new JsonArray();

        var saveResponse = await _client.PostAsJsonAsync("/api/artist", artist);
        Assert.Equal(HttpStatusCode.OK, saveResponse.StatusCode);

        // SaveArtist returns ArtistResponse { Artist, Albums }
        using var doc = await JsonDocument.ParseAsync(await saveResponse.Content.ReadAsStreamAsync());
        Assert.Equal(newName, doc.RootElement.GetProperty("Artist").GetProperty("ArtistName").GetString());

        artist["ArtistName"] = originalName;
        await _client.PostAsJsonAsync("/api/artist", artist);
    }

    [Fact]
    public async Task DeleteArtist_ValidId_Returns200()
    {
        var newArtist = new JsonObject
        {
            ["Id"] = 0,
            ["ArtistName"] = "DeleteTest " + Guid.NewGuid().ToString("N")[..8],
            ["Description"] = "Integration test artist created by the automated test suite.",
            ["ImageUrl"] = "",
            ["AmazonUrl"] = "",
            ["Albums"] = new JsonArray()
        };

        var created = await _client.PostAsJsonAsync("/api/artist", newArtist);
        Assert.Equal(HttpStatusCode.OK, created.StatusCode);
        // SaveArtist returns ArtistResponse { Artist, Albums }
        using var createdDoc = await JsonDocument.ParseAsync(await created.Content.ReadAsStreamAsync());
        var newId = createdDoc.RootElement.GetProperty("Artist").GetProperty("Id").GetInt32();

        var deleteResponse = await _client.DeleteAsync($"/api/artist/{newId}");
        Assert.Equal(HttpStatusCode.OK, deleteResponse.StatusCode);
    }

    [Fact]
    public async Task DeleteArtist_CascadesAlbumsAndTracks()
    {
        // Get a seeded album — use it as a template for a disposable artist+album.
        // /api/albums omits Tracks (list view doesn't need them), so load full detail before resubmitting.
        var list = await _client.GetFromJsonAsync<JsonArray>("/api/albums");
        var firstId = list![0]!["Id"]!.GetValue<int>();
        var template = (await _client.GetFromJsonAsync<JsonObject>($"/api/album/{firstId}"))!;

        // Save as new album under a new unique artist name
        template["Id"] = 0;
        template["Title"] = "CascadeTest " + Guid.NewGuid().ToString("N")[..8];
        template["Artist"]!["Id"] = 0;
        template["Artist"]!["ArtistName"] = "CascadeArtist " + Guid.NewGuid().ToString("N")[..8];

        var albumSave = await _client.PostAsJsonAsync("/api/album", template);
        Assert.Equal(HttpStatusCode.OK, albumSave.StatusCode);
        using var albumDoc = await JsonDocument.ParseAsync(await albumSave.Content.ReadAsStreamAsync());
        var albumId = albumDoc.RootElement.GetProperty("Id").GetInt32();
        var artistId = albumDoc.RootElement.GetProperty("ArtistId").GetInt32();

        // Delete the artist — should cascade to the album (and its tracks)
        var deleteResponse = await _client.DeleteAsync($"/api/artist/{artistId}");
        Assert.Equal(HttpStatusCode.OK, deleteResponse.StatusCode);

        // Album must be gone
        var albumCheck = await _client.GetAsync($"/api/album/{albumId}");
        Assert.Equal(HttpStatusCode.NoContent, albumCheck.StatusCode);

        // Artist must be gone (artist returns 404, album returns 204 — different controller behaviour)
        var artistCheck = await _client.GetAsync($"/api/artist/{artistId}");
        Assert.True(artistCheck.StatusCode == HttpStatusCode.NotFound
                 || artistCheck.StatusCode == HttpStatusCode.NoContent);
    }
}
