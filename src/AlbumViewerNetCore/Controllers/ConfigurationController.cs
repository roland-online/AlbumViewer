using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AlbumViewerAspNetCore;
using AlbumViewerBusiness.Configuration;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Reflection;
using System.Runtime.Versioning;
using Microsoft.Extensions.Configuration;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AlbumViewerNetCore.Controllers
{
    [ServiceFilter(typeof(ApiExceptionFilter))]
    [EnableCors("CorsPolicy")]
    public class ConfigurationController : Controller
    {
        IOptions<ApplicationConfiguration> AppConfiguration;
        IConfigurationRoot RawConfiguration;
        IWebHostEnvironment Host;

        public ConfigurationController(IOptions<ApplicationConfiguration> configuration,
            IConfigurationRoot config,
            IWebHostEnvironment host)
        {
            AppConfiguration = configuration;
            Host = host;
            RawConfiguration = config;
        }


        /// <summary>
        /// Returns the application configuration settings
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/configuration")]
        public ApplicationConfiguration GetConfiguration()
        {
            return AppConfiguration.Value;
        }



        /// <summary>
        /// Provides information about the running application
        /// </summary>
        /// <returns></returns>
	    [HttpGet("api/applicationstats")]
        public ApplicationStats GetApplicationStats()
        {
            var connStr = RawConfiguration.GetConnectionString("AlbumViewer");
            var provider = RawConfiguration["Data:Provider"]?.Trim().ToLowerInvariant();
            if (string.IsNullOrEmpty(provider))
            {
                if (!string.IsNullOrEmpty(connStr)) provider = "postgresql";
                else if (RawConfiguration["Data:useSqLite"] == "true") provider = "sqlite";
                else provider = "sqlserver";
            }
            string dataMode = provider switch
            {
                "sqlite"     => "SqLite",
                "sqlserver"  => "Sql Server",
                "postgresql" => "PostgreSQL",
                _            => provider
            };

            return new ApplicationStats
            {
                OsPlatform = System.Runtime.InteropServices.RuntimeInformation.OSDescription,
                AspDotnetVersion = System.Runtime.InteropServices.RuntimeInformation.FrameworkDescription,
                DataMode = dataMode
            };
        }


        /// <summary>
        /// Explicit endpoint to handle LetsEncryt certificate requests
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route(".well-known/acme-challenge/{id}")]
        public ActionResult LetsEncrypt(string id)
        {
            var file = Path.Combine(Host.WebRootPath, ".well-known", "acme-challenge", id);
            return PhysicalFile(file, "text/plain");
        }
    }
}
