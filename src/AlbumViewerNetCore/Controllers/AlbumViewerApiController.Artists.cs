using System.Collections.Generic;
using System.Threading.Tasks;
using AlbumViewerBusiness;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AlbumViewerAspNetCore
{
    public partial class AlbumViewerApiController
    {
        [HttpGet]
        [Route("api/artists")]
        public async Task<IEnumerable<ArtistWithAlbumCount>> GetArtists()
        {
            return await ArtistRepo.GetAllArtists();
        }

        [HttpGet("api/artist/{id:int}")]
        public async Task<ArtistResponse> Artist(int id)
        {
            var artist = await ArtistRepo.LoadAsync(id);

            if (artist == null)
                throw new ApiException("Invalid artist id.", 404);

            var albums = await ArtistRepo.GetAlbumsForArtist(id);

            return new ArtistResponse()
            {
                Artist = artist,
                Albums = albums
            };
        }

        [HttpPost("api/artist")]
        public async Task<ArtistResponse> SaveArtist([FromBody] Artist artist)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data", 401);

            if (!ArtistRepo.Validate(artist))
                throw new ApiException(ArtistRepo.ValidationErrors.ToString(), 500, ArtistRepo.ValidationErrors);

            if (!await ArtistRepo.SaveAsync(artist))
                throw new ApiException($"Unable to save artist. {ArtistRepo.ErrorMessage}");

            return new ArtistResponse()
            {
                Artist = artist,
                Albums = await ArtistRepo.GetAlbumsForArtist(artist.Id)
            };
        }

        [HttpGet("api/artistlookup")]
        public async Task<List<ArtistLookupItem>> ArtistLookup(string search = null)
        {
            if (string.IsNullOrEmpty(search))
                return new List<ArtistLookupItem>();

            var repo = new ArtistRepository(context);
            var term = search.ToLower();
            return await repo.ArtistLookup(term);
        }

        [HttpGet("api/amievil")]
        [Authorize]
        public async Task AmIEvil()
        {
            Response.ContentType = "text/html";
            await Response.WriteAsync("<html><h1>Yes I Am!</h1></html>");
        }

        [HttpDelete("api/artist/{id:int}")]
        public async Task<bool> DeleteArtist(int id)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data", 401);

            return await ArtistRepo.DeleteArtist(id);
        }
    }
}
