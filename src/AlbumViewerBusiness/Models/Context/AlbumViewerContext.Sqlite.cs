using Microsoft.EntityFrameworkCore;

namespace AlbumViewerBusiness
{
    public partial class AlbumViewerContext
    {
        partial void ConfigureSqlite(ModelBuilder builder)
        {
            // SQLite-specific model configuration goes here.
        }
    }
}
