using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AlbumViewerBusiness;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AlbumViewerAspNetCore
{
    public partial class AlbumViewerApiController
    {
        [HttpGet]
        [Route("api/albums")]
        public async Task<IEnumerable<Album>> GetAlbums(int page = -1, int pageSize = 15)
        {
            return await AlbumRepo.GetAllAlbums(page, pageSize);
        }

        [HttpGet("api/album/{id:int}")]
        public async Task<Album> GetAlbum(int id)
        {
            return await AlbumRepo.LoadAsync(id);
        }

        [HttpPost("api/album")]
        public async Task<Album> SaveAlbum([FromBody] Album postedAlbum)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data", 401);

            if (!ModelState.IsValid)
                throw new ApiException("Model binding failed.", 500);

            if (!AlbumRepo.Validate(postedAlbum))
                throw new ApiException(AlbumRepo.ErrorMessage, 500, AlbumRepo.ValidationErrors);

            var album = await AlbumRepo.SaveAlbum(postedAlbum);
            if (album == null)
                throw new ApiException(AlbumRepo.ErrorMessage, 500);

            return album;
        }

        [HttpDelete("api/album/{id:int}")]
        public async Task<bool> DeleteAlbum(int id)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data", 401);

            return await AlbumRepo.DeleteAlbum(id);
        }

        [HttpGet]
        public async Task<string> DeleteAlbumByName(string name)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data", 401);

            var pks = await context.Albums
                .Where(alb => alb.Title == name)
                .Select(alb => alb.Id).ToListAsync();

            var sb = new StringBuilder();
            foreach (int pk in pks)
            {
                bool result = await AlbumRepo.DeleteAlbum(pk);
                if (!result)
                    sb.AppendLine(AlbumRepo.ErrorMessage);
            }

            return sb.ToString();
        }
    }
}
