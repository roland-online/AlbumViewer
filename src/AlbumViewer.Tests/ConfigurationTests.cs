using System.Net;
using System.Net.Http.Json;
using System.Text.Json;

namespace AlbumViewer.Tests;

[Collection("AlbumViewer")]
public class ConfigurationTests(AlbumViewerFixture fixture)
{
    private readonly HttpClient _client = fixture.Client;

    [Fact]
    public async Task GetConfiguration_Returns200()
    {
        var response = await _client.GetAsync("/api/configuration");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        using var doc = await JsonDocument.ParseAsync(await response.Content.ReadAsStreamAsync());
        Assert.Equal(JsonValueKind.Object, doc.RootElement.ValueKind);
    }

    [Fact]
    public async Task GetApplicationStats_Returns200()
    {
        var response = await _client.GetAsync("/api/applicationstats");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        using var doc = await JsonDocument.ParseAsync(await response.Content.ReadAsStreamAsync());
        Assert.Equal(JsonValueKind.Object, doc.RootElement.ValueKind);
    }
}
