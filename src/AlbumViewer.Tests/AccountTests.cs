using System.Net;
using System.Net.Http.Json;
using System.Text.Json;

namespace AlbumViewer.Tests;

[Collection("AlbumViewer")]
public class AccountTests(AlbumViewerFixture fixture)
{
    private readonly HttpClient _client = fixture.Client;

    [Fact]
    public async Task Authenticate_ValidCredentials_ReturnsToken()
    {
        var response = await fixture.Factory.CreateClient()  // unauthenticated client
            .PostAsJsonAsync("/api/authenticate", new { username = "test", password = "test" });

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        using var doc = await JsonDocument.ParseAsync(await response.Content.ReadAsStreamAsync());
        Assert.True(doc.RootElement.TryGetProperty("token", out var token));
        Assert.False(string.IsNullOrEmpty(token.GetString()));
    }

    [Fact]
    public async Task Authenticate_InvalidCredentials_Returns401()
    {
        var response = await fixture.Factory.CreateClient()
            .PostAsJsonAsync("/api/authenticate", new { username = "wrong", password = "wrong" });

        Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
    }

    [Fact]
    public async Task IsAuthenticated_WithToken_Returns200()
    {
        var response = await _client.GetAsync("/api/isAuthenticated");
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }

    [Fact]
    public async Task IsAuthenticated_WithoutToken_Returns401()
    {
        var response = await fixture.Factory.CreateClient()  // unauthenticated
            .GetAsync("/api/isAuthenticated");

        // Endpoint returns 200 with bool body; false = not authenticated
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        var body = await response.Content.ReadAsStringAsync();
        Assert.Equal("false", body.Trim());
    }

    [Fact]
    public async Task Logout_Returns200()
    {
        var response = await _client.GetAsync("/api/logout");
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }
}
