using AlbumViewerBusiness;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;

namespace AlbumViewer.Tests;

/// <summary>
/// WebApplicationFactory that supports both PostgreSQL and SQLite test databases.
/// Provider selection:
///   ALBUMVIEWER_TEST_CONNSTR env var set  → PostgreSQL (explicit connection string)
///   User secrets has ConnectionStrings:AlbumViewer → PostgreSQL (dev secrets, DB name swapped to albumviewer_test)
///   Neither set → SQLite (zero-config, temp file — works on any machine including CI)
/// </summary>
public class AlbumViewerFactory : WebApplicationFactory<Program>
{
    // null = use SQLite; non-null = use PostgreSQL with this connection string
    private static readonly string? _pgConnStr = BuildPgConnectionString();

    private static string? BuildPgConnectionString()
    {
        var env = Environment.GetEnvironmentVariable("ALBUMVIEWER_TEST_CONNSTR");
        if (!string.IsNullOrEmpty(env)) return env;

        var config = new ConfigurationBuilder()
            .AddUserSecrets("d900d6cb-0e21-403b-94a3-17412045e7b4")
            .Build();

        var devConn = config.GetConnectionString("AlbumViewer");
        if (string.IsNullOrEmpty(devConn)) return null;

        // Swap database name to albumviewer_test to isolate test data
        var builder = new Npgsql.NpgsqlConnectionStringBuilder(devConn) { Database = "albumviewer_test" };
        return builder.ConnectionString;
    }

    private static readonly string _sqliteTestPath =
        Path.Combine(Path.GetTempPath(), "albumviewer_test.sqlite");

    public static bool UsePostgres => _pgConnStr != null;

    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.ConfigureServices(services =>
        {
            services.RemoveAll<DbContextOptions<AlbumViewerContext>>();
            services.RemoveAll<AlbumViewerContext>();

            if (_pgConnStr != null)
            {
                services.AddDbContext<AlbumViewerContext>(options =>
                    options.UseNpgsql(_pgConnStr));
            }
            else
            {
                // Delete stale SQLite file so each test run starts from a clean seed
                if (File.Exists(_sqliteTestPath))
                    File.Delete(_sqliteTestPath);

                services.AddDbContext<AlbumViewerContext>(options =>
                    options.UseSqlite($"Data Source={_sqliteTestPath}"));
            }
        });

        builder.UseSetting("Logging:LogLevel:Default", "Warning");
    }
}
