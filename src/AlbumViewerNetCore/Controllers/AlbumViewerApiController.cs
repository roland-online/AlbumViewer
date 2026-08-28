using System;
using System.Collections.Generic;
using AlbumViewerBusiness;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace AlbumViewerAspNetCore
{
    [ServiceFilter(typeof(ApiExceptionFilter))]
    public partial class AlbumViewerApiController : Controller
    {
        AlbumViewerContext context;
        IServiceProvider serviceProvider;

        ArtistRepository ArtistRepo;
        AlbumRepository AlbumRepo;
        IConfiguration Configuration;
        private ILogger<AlbumViewerApiController> Logger;
        private IWebHostEnvironment HostingEnv;

        public AlbumViewerApiController(
            AlbumViewerContext ctx,
            IServiceProvider svcProvider,
            ArtistRepository artistRepo,
            AlbumRepository albumRepo,
            IConfiguration config,
            ILogger<AlbumViewerApiController> logger,
            IWebHostEnvironment env)
        {
            context = ctx;
            serviceProvider = svcProvider;
            Configuration = config;
            AlbumRepo = albumRepo;
            ArtistRepo = artistRepo;
            Logger = logger;
            HostingEnv = env;
        }
    }

    public class ArtistResponse
    {
        public Artist Artist { get; set; }
        public List<Album> Albums { get; set; }
    }

    public class ApplicationStats
    {
        public string OsPlatform { get; set; }
        public string AspDotnetVersion { get; set; }
        public string AngularVersion { get; set; }
        public string DataMode { get; set; }
    }
}
