using System;
using System.IO;
using AlbumViewerBusiness;
using Microsoft.AspNetCore.Mvc;

namespace AlbumViewerAspNetCore
{
    public partial class AlbumViewerApiController
    {
        [HttpGet]
        [Route("api/throw")]
        public object Throw()
        {
            throw new InvalidOperationException("This is an unhandled exception");
        }

        [HttpGet]
        [Route("api/reloaddata")]
        public bool ReloadData()
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data", 401);

            var providerName = context.Database.ProviderName ?? string.Empty;
            if (providerName.Contains("Sqlite", StringComparison.OrdinalIgnoreCase))
                DropDataStoreSqlite();
            else
                DropDataStoreRelational();

            AlbumViewerDataImporter.EnsureAlbumData(context,
                Path.Combine(HostingEnv.ContentRootPath, "albums.js"));

            return true;
        }

        partial void DropDataStoreSqlite();
        partial void DropDataStoreRelational();
    }
}
