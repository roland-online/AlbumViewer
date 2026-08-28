using Microsoft.EntityFrameworkCore;

namespace AlbumViewerAspNetCore
{
    public partial class AlbumViewerApiController
    {
        partial void DropDataStoreRelational()
        {
            // SQL Server and PostgreSQL: drop all tables; EnsureCreated recreates schema.
            // IF EXISTS supported on SQL Server 2016+ and all PostgreSQL versions.
            // To add MySQL or another provider: add a case in Admin.cs and a new partial file.
            context.Database.ExecuteSqlRaw(@"
drop table if exists Tracks;
drop table if exists Albums;
drop table if exists Artists;
drop table if exists Users;
");
        }
    }
}
