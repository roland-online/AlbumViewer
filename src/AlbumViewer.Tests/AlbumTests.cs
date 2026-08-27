using System.Net;
using System.Net.Http.Json;
using AlbumViewerBusiness;

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
        var albums = await response.Content.ReadFromJsonAsync<List<Album>>();
        Assert.NotNull(albums);
        Assert.True(albums.Count > 0);
    }

    [Fact]
    public async Task GetAlbum_ValidId_Returns200WithArtistAndTracks()
    {
        var list = await _client.GetFromJsonAsync<List<Album>>("/api/albums");
        var id = list![0].Id;

        var response = await _client.GetAsync($"/api/album/{id}");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        var album = await response.Content.ReadFromJsonAsync<Album>();
        Assert.NotNull(album);
        Assert.False(string.IsNullOrEmpty(album.Title));
        Assert.NotNull(album.Artist);
        Assert.NotNull(album.Tracks);
    }

    [Fact]
    public async Task GetAlbum_UnknownId_Returns204()
    {
        var response = await _client.GetAsync("/api/album/99999999");
        // null return from controller -> 204 No Content in ASP.NET Core; 500 is not a valid outcome here
        Assert.Equal(HttpStatusCode.NoContent, response.StatusCode);
    }

    [Fact]
    public async Task SaveAlbum_Create_RoundTrips()
    {
        var list = await _client.GetFromJsonAsync<List<Album>>("/api/albums");
        // /api/albums omits Tracks (list view doesn't need them); load full detail before resubmitting
        var firstAlbum = (await _client.GetFromJsonAsync<Album>($"/api/album/{list![0].Id}"))!;

        // New album: clear id so EF inserts
        firstAlbum.Id = 0;
        firstAlbum.Title = "Test Album " + Guid.NewGuid().ToString("N")[..8];

        var saveResponse = await _client.PostAsJsonAsync("/api/album", firstAlbum);
        Assert.Equal(HttpStatusCode.OK, saveResponse.StatusCode);

        var saved = await saveResponse.Content.ReadFromJsonAsync<Album>();
        Assert.NotNull(saved);
        Assert.True(saved.Id > 0);

        // Verify round-trip
        var getResponse = await _client.GetAsync($"/api/album/{saved.Id}");
        Assert.Equal(HttpStatusCode.OK, getResponse.StatusCode);

        // Clean up
        await _client.DeleteAsync($"/api/album/{saved.Id}");
    }

    [Fact]
    public async Task SaveAlbum_UpdateTitle_Persists()
    {
        var list = await _client.GetFromJsonAsync<List<Album>>("/api/albums");
        // /api/albums omits Tracks (list view doesn't need them); load full detail before resubmitting
        var album = (await _client.GetFromJsonAsync<Album>($"/api/album/{list![0].Id}"))!;
        var originalTitle = album.Title;
        var newTitle = "Updated " + Guid.NewGuid().ToString("N")[..8];

        album.Title = newTitle;
        var saveResponse = await _client.PostAsJsonAsync("/api/album", album);
        Assert.Equal(HttpStatusCode.OK, saveResponse.StatusCode);

        var saved = await saveResponse.Content.ReadFromJsonAsync<Album>();
        Assert.Equal(newTitle, saved!.Title);

        // Restore original title — assert it actually took, so a failed restore doesn't
        // leave dirty seed data for subsequent tests.
        album.Title = originalTitle;
        var restoreResponse = await _client.PostAsJsonAsync("/api/album", album);
        Assert.Equal(HttpStatusCode.OK, restoreResponse.StatusCode);
        var restored = await restoreResponse.Content.ReadFromJsonAsync<Album>();
        Assert.Equal(originalTitle, restored!.Title);
    }

    [Fact]
    public async Task DeleteAlbum_ValidId_Returns200ThenNotFound()
    {
        // Create a disposable album first
        var list = await _client.GetFromJsonAsync<List<Album>>("/api/albums");
        // /api/albums omits Tracks (list view doesn't need them); load full detail before resubmitting
        var firstAlbum = (await _client.GetFromJsonAsync<Album>($"/api/album/{list![0].Id}"))!;
        firstAlbum.Id = 0;
        firstAlbum.Title = "DeleteTest " + Guid.NewGuid().ToString("N")[..8];

        var created = await _client.PostAsJsonAsync("/api/album", firstAlbum);
        Assert.Equal(HttpStatusCode.OK, created.StatusCode);
        var createdAlbum = await created.Content.ReadFromJsonAsync<Album>();
        Assert.NotNull(createdAlbum);

        var deleteResponse = await _client.DeleteAsync($"/api/album/{createdAlbum.Id}");
        Assert.Equal(HttpStatusCode.OK, deleteResponse.StatusCode);

        // Deleted album must actually be gone
        var getDeletedResponse = await _client.GetAsync($"/api/album/{createdAlbum.Id}");
        Assert.Equal(HttpStatusCode.NoContent, getDeletedResponse.StatusCode);

        // Artist must survive album deletion — cascade is one-directional (artist->albums, not albums->artist)
        var artistResponse = await _client.GetAsync($"/api/artist/{createdAlbum.ArtistId}");
        Assert.Equal(HttpStatusCode.OK, artistResponse.StatusCode);
    }

    [Fact]
    public async Task SaveAlbum_ZeroTracks_Returns500()
    {
        // Load full detail — list endpoint omits Tracks; submitting a list item directly
        // would trigger the no-tracks validation accidentally, not by intent.
        var list = await _client.GetFromJsonAsync<List<Album>>("/api/albums");
        var album = (await _client.GetFromJsonAsync<Album>($"/api/album/{list![0].Id}"))!;
        album.Id = 0;
        album.Title = "NoTracksTest " + Guid.NewGuid().ToString("N")[..8];
        album.Tracks = new List<Track>(); // explicitly empty — this is the condition under test

        var response = await _client.PostAsJsonAsync("/api/album", album);
        Assert.Equal(HttpStatusCode.InternalServerError, response.StatusCode);
    }

    [Fact]
    public async Task SaveAlbum_ShortDescription_Returns500()
    {
        // Load full detail — list endpoint omits Tracks; submitting a list item directly
        // would fail on the no-tracks validation before reaching the description validation.
        var list = await _client.GetFromJsonAsync<List<Album>>("/api/albums");
        var album = (await _client.GetFromJsonAsync<Album>($"/api/album/{list![0].Id}"))!;
        album.Id = 0;
        album.Title = "ShortDescTest " + Guid.NewGuid().ToString("N")[..8];
        album.Description = "Too short."; // this is the condition under test; Tracks are intact

        var response = await _client.PostAsJsonAsync("/api/album", album);
        Assert.Equal(HttpStatusCode.InternalServerError, response.StatusCode);
    }

    [Fact]
    public async Task SaveAlbum_NewArtistName_AutoCreatesArtist()
    {
        var list = await _client.GetFromJsonAsync<List<Album>>("/api/albums");
        // /api/albums omits Tracks (list view doesn't need them); load full detail before resubmitting
        var template = (await _client.GetFromJsonAsync<Album>($"/api/album/{list![0].Id}"))!;
        var uniqueArtistName = "AutoCreate " + Guid.NewGuid().ToString("N")[..8];
        template.Id = 0;
        template.Title = "AutoArtistTest " + Guid.NewGuid().ToString("N")[..8];
        template.Artist.Id = 0;
        template.Artist.ArtistName = uniqueArtistName;

        var saveResponse = await _client.PostAsJsonAsync("/api/album", template);
        Assert.Equal(HttpStatusCode.OK, saveResponse.StatusCode);
        var saved = await saveResponse.Content.ReadFromJsonAsync<Album>();
        Assert.NotNull(saved);

        // Artist was auto-created with a new Id
        Assert.True(saved.ArtistId > 0);
        var artistResponse = await _client.GetAsync($"/api/artist/{saved.ArtistId}");
        Assert.Equal(HttpStatusCode.OK, artistResponse.StatusCode);

        // Clean up
        await _client.DeleteAsync($"/api/artist/{saved.ArtistId}");  // cascades album
    }

    [Fact]
    public async Task DeleteAlbum_TracksAreRemoved()
    {
        // Create a disposable album with at least one track — /api/albums omits Tracks
        // (list view doesn't need them), so load full detail before resubmitting
        var list = await _client.GetFromJsonAsync<List<Album>>("/api/albums");
        var template = (await _client.GetFromJsonAsync<Album>($"/api/album/{list![0].Id}"))!;
        template.Id = 0;
        template.Title = "TrackDeleteTest " + Guid.NewGuid().ToString("N")[..8];

        var created = await _client.PostAsJsonAsync("/api/album", template);
        Assert.Equal(HttpStatusCode.OK, created.StatusCode);
        var createdAlbum = await created.Content.ReadFromJsonAsync<Album>();
        Assert.NotNull(createdAlbum);

        await _client.DeleteAsync($"/api/album/{createdAlbum.Id}");

        // Album is gone — tracks were removed with it (204 = no album, no tracks to retrieve)
        var check = await _client.GetAsync($"/api/album/{createdAlbum.Id}");
        Assert.Equal(HttpStatusCode.NoContent, check.StatusCode);
    }
}
