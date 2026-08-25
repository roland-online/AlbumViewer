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


services.AddDbContext<AlbumViewerContext>(options =>
{
    // Provider selection — set Data:Provider in appsettings.json (or override via environment/user secrets).
    // The connection string always lives in ConnectionStrings:AlbumViewer.
    // Legacy keys (Data:useSqLite, Data:SqlServerConnectionString) are still honoured as fallbacks.
    //
    // To add a new provider: add the NuGet package, add a case below, done.
    //   sqlite      — zero-config default; no ConnectionStrings entry needed
    //   sqlserver   — set ConnectionStrings:AlbumViewer to a SQL Server connection string
    //   postgresql  — set ConnectionStrings:AlbumViewer to a PostgreSQL connection string
    //   (any other) — add the EF Core provider package and a case below

    var connStr = configuration.GetConnectionString("AlbumViewer");
    var provider = configuration["Data:Provider"]?.Trim().ToLowerInvariant();

    // Legacy fallback: if Provider key is absent, infer from the old keys
    if (string.IsNullOrEmpty(provider))
    {
        if (!string.IsNullOrEmpty(connStr))
            provider = "postgresql";
        else if (configuration["Data:useSqLite"] == "true")
            provider = "sqlite";
        else
            provider = "sqlserver";
    }

    // Legacy fallback: if Provider is sqlserver but no ConnectionStrings entry, use old key
    if (provider == "sqlserver" && string.IsNullOrEmpty(connStr))
        connStr = configuration["Data:SqlServerConnectionString"];

    switch (provider)
    {
        case "sqlite":
            var sqlitePath = Path.Combine(environment.ContentRootPath, "AlbumViewerData.sqlite");
            options.UseSqlite($"Data Source={sqlitePath}");
            break;
        case "sqlserver":
            options.UseSqlServer(connStr, opt => opt.EnableRetryOnFailure());
            break;
        case "postgresql":
            options.UseNpgsql(connStr);
            break;
        default:
            throw new InvalidOperationException(
                $"Unknown database provider '{provider}'. Set Data:Provider to sqlite, sqlserver, or postgresql.");
    }
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

builder.Services.AddValidation();

builder.Services.AddExceptionHandler<ApiExceptionHandler>();

// LiveReload: controlled by LiveReload:LiveReloadEnabled in appsettings.Development.json
// Set to true when running ng serve alongside the API (Step 3.3)
builder.Services.AddLiveReload();

Log.Logger = new LoggerConfiguration()
    .ReadFrom.Configuration(configuration)  // min-levels driven from appsettings Serilog section
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
using var scope = app.Services.CreateScope();
var albumContext = scope.ServiceProvider.GetService<AlbumViewerContext>();


if (environment.IsDevelopment())
{
    app.UseLiveReload(); // active only when LiveReload:LiveReloadEnabled=true in appsettings.Development.json
    // UseDeveloperExceptionPage is auto-added by WebApplication in Development mode
}
else
{
    app.UseExceptionHandler();
}

//app.UseHttpsRedirection();


// Strip Referer on cross-origin requests so third-party image CDNs (e.g. Amazon) don't hotlink-block
app.Use(async (context, next) =>
{
    context.Response.Headers.Append("Referrer-Policy", "no-referrer");
    await next();
});

app.UseStatusCodePages();
app.MapStaticAssets(); // serves Angular wwwroot with compression + cache headers

app.UseRouting();

app.UseCors("CorsPolicy");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.MapOpenApi();

// SPA fallback: unmatched routes serve index.html for Angular client-side routing
app.MapFallbackToFile("index.html");

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
