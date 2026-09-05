using Microsoft.EntityFrameworkCore;

namespace AlbumViewerAspNetCore
{
    public partial class AlbumViewerApiController
    {
        partial void DropDataStoreSqlite()
        {
            // Use EF's active provider connection rather than guessing the SQLite file path.
            // EnsureCreated in the importer recreates the schema on the next line of the request.
            if (!context.Database.EnsureDeleted())
                throw new ApiException("Can't reset data. Existing database could not be deleted.");
        }
    }
}
