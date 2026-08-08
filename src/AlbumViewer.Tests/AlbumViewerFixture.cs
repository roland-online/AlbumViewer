using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text.Json;

namespace AlbumViewer.Tests;

/// <summary>
/// Shared fixture: one factory + one seeded schema per test class collection.
/// </summary>
public class AlbumViewerFixture : IAsyncLifetime
{
    public AlbumViewerFactory Factory { get; } = new();
    public HttpClient Client { get; private set; } = null!;

    public async Task InitializeAsync()
    {
        Client = Factory.CreateClient();
        var token = await GetTokenAsync(Client);
        Client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
    }

    public async Task DisposeAsync()
    {
        Client.Dispose();
        await Factory.DisposeAsync();
    }

    public static async Task<string> GetTokenAsync(HttpClient client)
    {
        var response = await client.PostAsJsonAsync("/api/authenticate",
            new { username = "test", password = "test" });
        response.EnsureSuccessStatusCode();

        using var doc = await JsonDocument.ParseAsync(await response.Content.ReadAsStreamAsync());
        return doc.RootElement.GetProperty("token").GetString()
               ?? throw new InvalidOperationException("No token in auth response");
    }
}

[CollectionDefinition("AlbumViewer")]
public class AlbumViewerCollection : ICollectionFixture<AlbumViewerFixture> { }
