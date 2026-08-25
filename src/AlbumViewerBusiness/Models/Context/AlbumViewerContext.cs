using Microsoft.EntityFrameworkCore;

namespace AlbumViewerBusiness
{
    public partial class AlbumViewerContext : DbContext
    {
        public string ConnectionString { get; set; }

        public AlbumViewerContext(DbContextOptions options) : base(options) { }

        public AlbumViewerContext() { }

        public DbSet<Album> Albums { get; set; }
        public DbSet<Artist> Artists { get; set; }
        public DbSet<Track> Tracks { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            var provider = Database.ProviderName ?? string.Empty;
            if (provider.Contains("Sqlite"))       ConfigureSqlite(builder);
            else if (provider.Contains("SqlServer")) ConfigureSqlServer(builder);
            else if (provider.Contains("Npgsql"))    ConfigurePostgreSql(builder);
        }

        partial void ConfigureSqlite(ModelBuilder builder);
        partial void ConfigureSqlServer(ModelBuilder builder);
        partial void ConfigurePostgreSql(ModelBuilder builder);
    }
}