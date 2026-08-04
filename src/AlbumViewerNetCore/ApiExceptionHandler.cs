using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace AlbumViewerAspNetCore;

/// <summary>
/// Centralized API exception handler — returns JSON error responses for unhandled exceptions.
/// Registered via AddExceptionHandler&lt;ApiExceptionHandler&gt;() and activated by app.UseExceptionHandler().
/// </summary>
public class ApiExceptionHandler : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(
        HttpContext httpContext,
        Exception exception,
        CancellationToken cancellationToken)
    {
        httpContext.Response.StatusCode = 500;
        httpContext.Response.ContentType = "application/json";

        await httpContext.Response.WriteAsJsonAsync(new
        {
            message = "An unexpected error occurred.",
            detail = exception.Message
        }, cancellationToken);

        return true;
    }
}
