using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlbumViewerBusiness
{

    /// <summary>
    /// This class imports Albums, artists and tracks from the
    /// wwwroot/data/albums.js file which contains all the data
    /// in a single graph.
    /// </summary>
    public class AlbumViewerDataImporter
    {
        public static bool EnsureAlbumData(AlbumViewerContext context, string jsonDataFilePath)
        {
            // EnsureCreated is idempotent — creates schema if it doesn't exist, no-op if it does.
            // This avoids using exception handling as control flow to detect a missing schema.
            bool created = context.Database.EnsureCreated();
            if (created)
                Console.WriteLine("Database schema created.");

            if (!context.Albums.Any())
            {
                Console.WriteLine("No album data found — importing from seed file...");
                string json = System.IO.File.ReadAllText(jsonDataFilePath);
                int count = ImportFromJson(context, json);
                Console.WriteLine($"Seed import complete: {count} albums imported.");
                return count > 0;
            }

            Console.WriteLine("Album data already present — skipping seed import.");
            return true;
        }

        /// <summary>
        /// Imports albums, artists and tracks from a JSON array.
        /// Returns the number of albums successfully saved.
        /// </summary>
        public static int ImportFromJson(AlbumViewerContext context, string json)
        {
            var albums = JsonConvert.DeserializeObject<Album[]>(json);
            int saved = 0;
            int failed = 0;

            foreach (var album in albums)
            {
                // clear out primary/identity keys so insert works
                album.Id = 0;
                album.ArtistId = 0;
                album.Artist.Id = 0;

                var existingArtist = context.Artists.FirstOrDefault(a => a.ArtistName == album.Artist.ArtistName);
                if (existingArtist == null)
                {
                    context.Artists.Add(album.Artist);
                }
                else
                {
                    album.Artist = existingArtist;
                    album.ArtistId = existingArtist.Id;
                }

                if (album.Tracks != null)
                {
                    foreach (var track in album.Tracks)
                    {
                        track.Id = 0;
                        context.Tracks.Add(track);
                    }
                }
                context.Add(album);

                try
                {
                    context.SaveChanges();
                    saved++;
                }
                catch (Exception ex)
                {
                    failed++;
                    Console.WriteLine($"Error saving album '{album.Title}': {ex.Message}");
                }
            }

            var user = new User()
            {
                Username = "test",
                Password = "test",
                Fullname = "Test User",
            };
            context.Users.Add(user);
            context.SaveChanges();

            if (failed > 0)
                Console.WriteLine($"Import finished with {failed} failure(s).");

            return saved;
        }
    }
}