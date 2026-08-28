using Microsoft.EntityFrameworkCore;

namespace AlbumViewerBusiness
{
    public class AlbumViewerContext : DbContext
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
        }
    }
}