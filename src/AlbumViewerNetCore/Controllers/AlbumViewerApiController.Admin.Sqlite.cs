using System.IO;
using Microsoft.EntityFrameworkCore;

namespace AlbumViewerAspNetCore
{
    public partial class AlbumViewerApiController
    {
        partial void DropDataStoreSqlite()
        {
            // Close connection and delete the file — EnsureCreated recreates it on next request.
            // Not reliable under multiple connections; acceptable for single-user dev/demo.
            context.Database.CloseConnection();

            try
            {
                System.IO.File.Delete(Path.Combine(Directory.GetCurrentDirectory(), "AlbumViewerData.sqlite"));
            }
            catch
            {
                throw new ApiException("Can't reset data. Existing database is in use.");
            }
        }
    }
}
