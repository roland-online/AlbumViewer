using System.Net;
using System.Net.Http.Json;
using AlbumViewerBusiness;
using AlbumViewerAspNetCore;

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
        // Controller declares Task<IEnumerable<Artist>> but the repository actually returns
        // ArtistWithAlbumCount; ASP.NET Core serializes by runtime type, so AlbumCount is present
        // on the wire. Deserializing as plain Artist would silently drop it (unknown properties
        // are ignored by default) — use the real shape so a regression here would be caught.
        var artists = await response.Content.ReadFromJsonAsync<List<ArtistWithAlbumCount>>();
        Assert.NotNull(artists);
        Assert.True(artists.Count > 0);
        Assert.All(artists, a => Assert.True(a.AlbumCount >= 0));
    }

    [Fact]
    public async Task GetArtist_ValidId_Returns200WithAlbums()
    {
        var list = await _client.GetFromJsonAsync<List<Artist>>("/api/artists");
        var id = list![0].Id;

        var response = await _client.GetAsync($"/api/artist/{id}");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        var artistResponse = await response.Content.ReadFromJsonAsync<ArtistResponse>();
        Assert.NotNull(artistResponse);
        Assert.NotNull(artistResponse.Artist);
        Assert.False(string.IsNullOrEmpty(artistResponse.Artist.ArtistName));
        Assert.NotNull(artistResponse.Albums);
    }

    [Fact]
    public async Task GetArtist_UnknownId_Returns404OrNoContent()
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
        var newArtist = new Artist
        {
            Id = 0,
            ArtistName = "Test Artist " + Guid.NewGuid().ToString("N")[..8],
            Description = "Integration test artist created by the automated test suite.",
            ImageUrl = "",
            AmazonUrl = ""
        };

        var saveResponse = await _client.PostAsJsonAsync("/api/artist", newArtist);
        Assert.Equal(HttpStatusCode.OK, saveResponse.StatusCode);

        // SaveArtist returns ArtistResponse { Artist, Albums }
        var saved = await saveResponse.Content.ReadFromJsonAsync<ArtistResponse>();
        Assert.NotNull(saved);
        Assert.True(saved.Artist.Id > 0);

        var getResponse = await _client.GetAsync($"/api/artist/{saved.Artist.Id}");
        Assert.Equal(HttpStatusCode.OK, getResponse.StatusCode);

        await _client.DeleteAsync($"/api/artist/{saved.Artist.Id}");
    }

    [Fact]
    public async Task SaveArtist_UpdateName_Persists()
    {
        var list = await _client.GetFromJsonAsync<List<Artist>>("/api/artists");
        var artist = list![0];
        var originalName = artist.ArtistName;
        var newName = "Updated " + Guid.NewGuid().ToString("N")[..8];

        artist.ArtistName = newName;
        var saveResponse = await _client.PostAsJsonAsync("/api/artist", artist);
        Assert.Equal(HttpStatusCode.OK, saveResponse.StatusCode);

        // SaveArtist returns ArtistResponse { Artist, Albums }
        var saved = await saveResponse.Content.ReadFromJsonAsync<ArtistResponse>();
        Assert.Equal(newName, saved!.Artist.ArtistName);

        // Restore original name — assert it actually took, so a failed restore doesn't
        // leave dirty seed data for subsequent tests.
        artist.ArtistName = originalName;
        var restoreResponse = await _client.PostAsJsonAsync("/api/artist", artist);
        Assert.Equal(HttpStatusCode.OK, restoreResponse.StatusCode);
        var restored = await restoreResponse.Content.ReadFromJsonAsync<ArtistResponse>();
        Assert.Equal(originalName, restored!.Artist.ArtistName);
    }

    [Fact]
    public async Task DeleteArtist_ValidId_Returns200()
    {
        var newArtist = new Artist
        {
            Id = 0,
            ArtistName = "DeleteTest " + Guid.NewGuid().ToString("N")[..8],
            Description = "Integration test artist created by the automated test suite.",
            ImageUrl = "",
            AmazonUrl = ""
        };

        var created = await _client.PostAsJsonAsync("/api/artist", newArtist);
        Assert.Equal(HttpStatusCode.OK, created.StatusCode);
        // SaveArtist returns ArtistResponse { Artist, Albums }
        var createdArtist = await created.Content.ReadFromJsonAsync<ArtistResponse>();
        Assert.NotNull(createdArtist);

        var deleteResponse = await _client.DeleteAsync($"/api/artist/{createdArtist.Artist.Id}");
        Assert.Equal(HttpStatusCode.OK, deleteResponse.StatusCode);

        // Artist must actually be gone after deletion
        var getDeletedResponse = await _client.GetAsync($"/api/artist/{createdArtist.Artist.Id}");
        Assert.True(
            getDeletedResponse.StatusCode == HttpStatusCode.NotFound ||
            getDeletedResponse.StatusCode == HttpStatusCode.NoContent);
    }

    [Fact]
    public async Task DeleteArtist_CascadesAlbumsAndTracks()
    {
        // Get a seeded album — use it as a template for a disposable artist+album.
        // /api/albums omits Tracks (list view doesn't need them), so load full detail before resubmitting.
        var list = await _client.GetFromJsonAsync<List<Album>>("/api/albums");
        var template = (await _client.GetFromJsonAsync<Album>($"/api/album/{list![0].Id}"))!;

        // Save as new album under a new unique artist name
        template.Id = 0;
        template.Title = "CascadeTest " + Guid.NewGuid().ToString("N")[..8];
        template.Artist.Id = 0;
        template.Artist.ArtistName = "CascadeArtist " + Guid.NewGuid().ToString("N")[..8];

        var albumSave = await _client.PostAsJsonAsync("/api/album", template);
        Assert.Equal(HttpStatusCode.OK, albumSave.StatusCode);
        var savedAlbum = await albumSave.Content.ReadFromJsonAsync<Album>();
        Assert.NotNull(savedAlbum);

        // Delete the artist — should cascade to the album (and its tracks)
        var deleteResponse = await _client.DeleteAsync($"/api/artist/{savedAlbum.ArtistId}");
        Assert.Equal(HttpStatusCode.OK, deleteResponse.StatusCode);

        // Album must be gone
        var albumCheck = await _client.GetAsync($"/api/album/{savedAlbum.Id}");
        Assert.Equal(HttpStatusCode.NoContent, albumCheck.StatusCode);

        // Artist must be gone (artist returns 404, album returns 204 — different controller behaviour)
        var artistCheck = await _client.GetAsync($"/api/artist/{savedAlbum.ArtistId}");
        Assert.True(artistCheck.StatusCode == HttpStatusCode.NotFound
                 || artistCheck.StatusCode == HttpStatusCode.NoContent);
    }
}
