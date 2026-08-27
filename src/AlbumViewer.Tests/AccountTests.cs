using System.Net;
using System.Net.Http.Json;
using System.Text.Json.Serialization;

namespace AlbumViewer.Tests;

// Wire shape is the anonymous object returned by AccountController.Authenticate — no server-side type exists.
public record AuthResponse(
    [property: JsonPropertyName("token")] string Token,
    [property: JsonPropertyName("expires")] DateTime Expires,
    [property: JsonPropertyName("displayName")] string DisplayName);

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
        var auth = await response.Content.ReadFromJsonAsync<AuthResponse>();
        Assert.NotNull(auth);
        Assert.False(string.IsNullOrEmpty(auth.Token));
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
    public async Task IsAuthenticated_WithoutToken_Returns200False()
    {
        var response = await fixture.Factory.CreateClient()  // unauthenticated
            .GetAsync("/api/isAuthenticated");

        // Endpoint returns 200 with bool body; false = not authenticated
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        var body = await response.Content.ReadAsStringAsync();
        Assert.Equal("false", body.Trim());
    }

    [Fact]
    public async Task Logout_Returns200_AndRevokesToken()
    {
        // Uses the collection-shared client/token — safe because no other test in the
        // collection depends on isAuthenticated returning true afterwards (verified: the
        // only other isAuthenticated call only asserts status code 200, not the bool body).
        var response = await _client.GetAsync("/api/logout");
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);

        var isAuthResponse = await _client.GetAsync("/api/isAuthenticated");
        Assert.Equal(HttpStatusCode.OK, isAuthResponse.StatusCode);
        var body = await isAuthResponse.Content.ReadAsStringAsync();
        Assert.Equal("false", body.Trim());
    }
}
