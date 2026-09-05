using AlbumViewerBusiness;
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;

namespace AlbumViewer.Tests;

/// <summary>
/// WebApplicationFactory that supports both PostgreSQL and SQLite test databases.
/// Provider selection is controlled solely by ALBUMVIEWER_TEST_CONNSTR, so both
/// providers stay reachable on a dev machine regardless of what's in user secrets:
///   ALBUMVIEWER_TEST_CONNSTR env var set  → PostgreSQL (explicit connection string)
///   ALBUMVIEWER_TEST_CONNSTR unset/empty  → SQLite (zero-config, temp file — works on any machine including CI)
/// </summary>
public class AlbumViewerFactory : WebApplicationFactory<Program>
{
    // null = use SQLite; non-null = use PostgreSQL with this connection string
    private static readonly string? _pgConnStr = BuildPgConnectionString();

    private static string? BuildPgConnectionString()
    {
        var env = Environment.GetEnvironmentVariable("ALBUMVIEWER_TEST_CONNSTR");
        return string.IsNullOrEmpty(env) ? null : env;
    }

    // Instance-scoped (not static): AdminTests intentionally spins up its own separate
    // AlbumViewerFactory per test (reloaddata drops/recreates tables), which would otherwise
    // race with the shared collection fixture's factory over one shared file.
    private readonly string _sqliteTestPath =
        Path.Combine(Path.GetTempPath(), $"albumviewer_test_{Guid.NewGuid():N}.sqlite");

    public static bool UsePostgres => _pgConnStr != null;

    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.ConfigureServices(services =>
        {
            services.RemoveAll<DbContextOptions<AlbumViewerContext>>();
            services.RemoveAll<AlbumViewerContext>();

            // RemoveAll above only strips the DbContextOptions<T>/T descriptors — it leaves behind
            // the EF Core/Npgsql *internal* provider services that Program.cs's own UseNpgsql() call
            // already registered, so re-adding with a different provider here throws "only a single
            // database provider can be registered". Strip every EF Core/Npgsql descriptor to be safe.
            var efDescriptors = services
                .Where(d => d.ServiceType.Assembly.GetName().Name?.StartsWith("Microsoft.EntityFrameworkCore") == true
                         || d.ServiceType.Assembly.GetName().Name?.StartsWith("Npgsql") == true)
                .ToList();
            foreach (var d in efDescriptors)
                services.Remove(d);

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
                    options.UseSqlite($"Data Source={_sqliteTestPath};Pooling=False"));
            }
        });

        builder.UseSetting("Logging:LogLevel:Default", "Warning");
    }

    protected override void Dispose(bool disposing)
    {
        base.Dispose(disposing);
        if (_pgConnStr == null && File.Exists(_sqliteTestPath))
            File.Delete(_sqliteTestPath);
    }
}
