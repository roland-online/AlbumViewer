using System.Net;
using System.Net.Http.Json;
using AlbumViewerAspNetCore;
using AlbumViewerBusiness.Configuration;

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
        var config = await response.Content.ReadFromJsonAsync<ApplicationConfiguration>();
        Assert.NotNull(config);
        Assert.False(string.IsNullOrEmpty(config.ApplicationName));
        Assert.True(config.MaxListItems > 0);
    }

    [Fact]
    public async Task GetApplicationStats_Returns200()
    {
        var response = await _client.GetAsync("/api/applicationstats");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        var stats = await response.Content.ReadFromJsonAsync<ApplicationStats>();
        Assert.NotNull(stats);
        Assert.False(string.IsNullOrEmpty(stats.OsPlatform));
        Assert.False(string.IsNullOrEmpty(stats.AspDotnetVersion));
        Assert.False(string.IsNullOrEmpty(stats.DataMode));
        // AngularVersion is never set server-side — the Angular client overlays its own
        // version client-side (parity with the original's jQuery [ng-version] approach).
        Assert.Null(stats.AngularVersion);
    }
}
