using Microsoft.EntityFrameworkCore;

namespace AlbumViewerBusiness
{
    public partial class AlbumViewerContext
    {
        partial void ConfigurePostgreSql(ModelBuilder builder)
        {
            // PostgreSQL-specific model configuration goes here.
        }
    }
}
