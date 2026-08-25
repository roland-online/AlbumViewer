using System.Net;
using System.Net.Http.Headers;
using System.Net.Http.Json;

namespace AlbumViewer.Tests;

/// <summary>
/// Tests for reloaddata.
/// reloaddata drops and re-seeds all tables so uses its own factory, not the shared fixture.
///
/// POST /api/login is intentionally not tested — it is [Obsolete] and never called by the
/// Angular frontend. The consistency rule (all used endpoints have tests) is relaxed here
/// because the endpoint is explicitly marked dead-end in the source.
/// </summary>
public class AdminTests
{
    [Fact]
    public async Task ReloadData_WithAuth_Returns200AndReseeds()
    {
        // Isolated factory — reloaddata drops + recreates all tables; must not share state with other tests
        using var factory = new AlbumViewerFactory();
        var client = factory.CreateClient();
        var token = await AlbumViewerFixture.GetTokenAsync(client);
        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);

        var response = await client.GetAsync("/api/reloaddata");
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);

        // Albums must be present after reseed
        var albums = await client.GetFromJsonAsync<System.Text.Json.Nodes.JsonArray>("/api/albums");
        Assert.NotNull(albums);
        Assert.True(albums.Count > 0);
    }

    [Fact]
    public async Task ReloadData_WithoutAuth_Returns401()
    {
        using var factory = new AlbumViewerFactory();
        var client = factory.CreateClient();

        var response = await client.GetAsync("/api/reloaddata");
        Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
    }
}
