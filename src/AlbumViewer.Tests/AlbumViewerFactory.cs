using AlbumViewerBusiness;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Npgsql;

namespace AlbumViewer.Tests;

/// <summary>
/// WebApplicationFactory pointing at albumviewer_test.
/// Derives the connection string from the API project's user secrets, swapping only the database name.
/// Override with ALBUMVIEWER_TEST_CONNSTR env var if needed.
/// </summary>
public class AlbumViewerFactory : WebApplicationFactory<Program>
{
    private static string BuildTestConnectionString()
    {
        var env = Environment.GetEnvironmentVariable("ALBUMVIEWER_TEST_CONNSTR");
        if (!string.IsNullOrEmpty(env)) return env;

        // Load user secrets from the API project to get the real password
        var config = new ConfigurationBuilder()
            .AddUserSecrets("d900d6cb-0e21-403b-94a3-17412045e7b4")
            .Build();

        var devConn = config.GetConnectionString("AlbumViewer")
                      ?? "Host=localhost;Database=albumviewer;Username=postgres";

        // Swap database name to albumviewer_test
        var builder = new NpgsqlConnectionStringBuilder(devConn)
        {
            Database = "albumviewer_test"
        };
        return builder.ConnectionString;
    }

    public static readonly string TestConnectionString = BuildTestConnectionString();

    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.ConfigureServices(services =>
        {
            services.RemoveAll<DbContextOptions<AlbumViewerContext>>();
            services.RemoveAll<AlbumViewerContext>();

            services.AddDbContext<AlbumViewerContext>(options =>
                options.UseNpgsql(TestConnectionString));
        });

        builder.UseSetting("Logging:LogLevel:Default", "Warning");
    }
}
