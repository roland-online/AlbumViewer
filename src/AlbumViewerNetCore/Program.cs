using System;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Text;
using System.Text.Encodings.Web;
using AlbumViewerAspNetCore;
using Microsoft.Extensions.Configuration;
using AlbumViewerBusiness;
using AlbumViewerBusiness.Configuration;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Net.Http.Headers;
using Serilog;
using Westwind.AspNetCore.LiveReload;


var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;
var configuration = builder.Configuration;

var host = builder.Host;
var webHost = builder.WebHost;
var environment = builder.Environment;


services.AddDbContext<AlbumViewerContext>(builder =>
{
    var connStr = configuration.GetConnectionString("AlbumViewer");
    builder.UseNpgsql(connStr);
});


var config = new ApplicationConfiguration();
configuration.Bind("Application", config);
services.AddSingleton(config);

App.Configuration = config;

// Also make top level configuration available (for EF configuration and access to connection string)
services.AddSingleton<IConfigurationRoot>(configuration);
services.AddSingleton<IConfiguration>(configuration);

// Cors policy is added to controllers via [EnableCors("CorsPolicy")]
// or .UseCors("CorsPolicy") globally
services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy",
        builder => builder
            // required if AllowCredentials is set also
            .SetIsOriginAllowed(s => true)
            //.AllowAnyOrigin()
            .AllowAnyMethod()  // doesn't work for DELETE!
            .WithMethods("DELETE")
            .AllowAnyHeader()
            .AllowCredentials()
    );
});

services.AddAuthentication(options => // JwtBearerDefaults.AuthenticationScheme)
    {
        options.DefaultScheme = "JWT_OR_COOKIE";
        options.DefaultChallengeScheme = "JWT_OR_COOKIE";
    })
    .AddCookie( options =>
    {
        options.LoginPath = "/login";
        options.ExpireTimeSpan = TimeSpan.FromDays(1);
    })
    .AddJwtBearer( options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = config.JwtToken.Issuer,
            ValidateAudience = true,
            ValidAudience = config.JwtToken.Audience,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config.JwtToken.SigningKey))
        };
    })
    // Add this to allow both Cookies and Bearer Tokens 
    // - using default scheme names. Can use custom names and then add to the AddXXXX(scheme, options=> {} )
    .AddPolicyScheme("JWT_OR_COOKIE", "JWT_OR_COOKIE", options =>
    {
        options.ForwardDefaultSelector = context =>
        {
            string authorization = context.Request.Headers[HeaderNames.Authorization];
            if (!string.IsNullOrEmpty(authorization) && authorization.StartsWith("Bearer "))
            {
                return JwtBearerDefaults.AuthenticationScheme;
            }

            return CookieAuthenticationDefaults.AuthenticationScheme;
        };
    });

// Instance injection
services.AddScoped<AlbumRepository>();
services.AddScoped<ArtistRepository>();
services.AddScoped<AccountRepository>();

// Per request injections
services.AddScoped<ApiExceptionFilter>();

services.AddControllers()
    .AddJsonOptions(opt =>
    {
        opt.JsonSerializerOptions.PropertyNamingPolicy = null; // keep PascalCase
        opt.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
        if (environment.IsDevelopment())
            opt.JsonSerializerOptions.WriteIndented = true;
    });


builder.Services.AddOpenApi();

builder.Services.AddExceptionHandler<ApiExceptionHandler>();

// LiveReload disabled when Angular is served from wwwroot (pre-built files).
// Re-enable in Step 3 when running ng serve alongside the API.
// if (environment.IsDevelopment())
//     builder.Services.AddLiveReload();

Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Information()
    .MinimumLevel.Override("Microsoft.EntityFrameworkCore", Serilog.Events.LogEventLevel.Warning)
    .MinimumLevel.Override("Microsoft.AspNetCore.StaticFiles", Serilog.Events.LogEventLevel.Warning)
    .WriteTo.Console()
    .WriteTo.File("logs/albumviewer-.log", rollingInterval: RollingInterval.Day)
    .CreateLogger();
builder.Logging.ClearProviders();
builder.Logging.AddSerilog(Log.Logger);

//
// *** BUILD THE APP
//
var app = builder.Build();


// Get any injected items
var albumContext = app.Services.CreateScope().ServiceProvider.GetService<AlbumViewerContext>();

    

//Log.Logger = new LoggerConfiguration()
//        .WriteTo.RollingFile(pathFormat: "logs\\log-{Date}.log")
//        .CreateLogger();

//loggerFactory
//    .AddSerilog();


if (environment.IsDevelopment())
{
    // app.UseLiveReload(); // re-enable in Step 3 with ng serve
    // UseDeveloperExceptionPage is auto-added by WebApplication in Development mode
}
else
{
    app.UseExceptionHandler();
}

//app.UseHttpsRedirection();


app.UseStatusCodePages();
app.UseDefaultFiles(); // so index.html is not required
app.UseStaticFiles();

app.UseRouting();

app.UseCors("CorsPolicy");

app.UseAuthentication();
app.UseAuthorization();

// UseEndpoints is required here because app.Run() below is a terminal middleware
// that prevents WebApplication's implicit endpoint execution. ASP0014 does not apply.
#pragma warning disable ASP0014
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});
#pragma warning restore ASP0014


// for this app make it public
if (true)  // (app.Environment.IsDevelopment()) 
{
    app.MapOpenApi();
}

// catch-all handler for HTML5 client routes - serve index.html
app.Run(async context =>
{
    var path = context.Request.Path.Value;

    // Make sure Angular output was created in wwwroot
    // Running Angular in dev mode nukes output folder!
    // so it could be missing.
    if (environment.WebRootPath == null)
        throw new InvalidOperationException("wwwroot folder doesn't exist. Please recompile your Angular Project before accessing index.html. API calls will work fine.");

    context.Response.ContentType = "text/html";
    await context.Response.SendFileAsync(Path.Combine(environment.WebRootPath, "index.html"));
});

// Initialize Database if it doesn't exist
AlbumViewerDataImporter.EnsureAlbumData(albumContext, Path.Combine(environment.ContentRootPath, "albums.js"));
albumContext?.Dispose();


Console.ForegroundColor = ConsoleColor.DarkYellow;
Console.WriteLine($@"----------------
AlbumViewer Core
----------------");
Console.ResetColor();

Console.WriteLine("\r\nPlatform: " + System.Runtime.InteropServices.RuntimeInformation.OSDescription);
Console.WriteLine(".NET Version: " + System.Runtime.InteropServices.RuntimeInformation.FrameworkDescription);
Console.WriteLine("Hosting Environment: " + environment.EnvironmentName);
Console.WriteLine("Database: " + configuration.GetConnectionString("AlbumViewer"));



app.Run();
