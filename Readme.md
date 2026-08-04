# AlbumViewer — music-db fork

Forked from [RickStrahl/AlbumViewerVNext](https://github.com/RickStrahl/AlbumViewerVNext).

This is a working development baseline for the music-db web application migration. The fork has been upgraded from its original .NET 8 / Angular 11 / SQLite state to a modern .NET 10 / PostgreSQL stack. The Angular frontend replacement (Angular 22 + Angular Material) is pending — see Step 3 of the setup checklist.

---

## Current state (2026-08-04)

### Backend — complete

| Component | Status |
|---|---|
| .NET 10.0 | ✅ |
| EF Core 10.0.7 + Npgsql 10.0.3 | ✅ |
| PostgreSQL (`albumviewer` db, UTF-8 / ICU / UTC) | ✅ |
| `Westwind.Data.EfCore` 10.1.1 | ✅ |
| `Westwind.AspNetCore` 4.1.11 | ✅ |
| Built-in .NET 10 OpenAPI | ✅ |
| System.Text.Json | ✅ |
| Serilog (console + rolling file) | ✅ |
| `IExceptionHandler` JSON error responses | ✅ |
| `MapFallbackToFile` SPA routing | ✅ |
| `MapStaticAssets` static file serving | ✅ |
| CRUD verified against PostgreSQL | ✅ |

### Frontend — pending

The existing Angular 11 + Bootstrap 4 pre-built files are in `wwwroot` and serve for API smoke-testing. The frontend will be replaced with Angular 22 + Angular Material (Step 3).

---

## Getting started

### Prerequisites

- .NET 10 SDK (`10.0.1xx` build, not the VS-bundled `10.0.3xx`)
- PostgreSQL 18 with `bin/` on PATH
- Node.js 24 LTS, Angular CLI 22

### Database setup

Run [`db/create_database.sql`](db/create_database.sql) against your PostgreSQL instance connected to the `postgres` maintenance database. Creates `albumviewer` with UTF-8 / ICU `en-001` / UTC / ISO,YMD settings.

### Backend

```powershell
cd src/AlbumViewerNetCore
dotnet user-secrets set "ConnectionStrings:AlbumViewer" "Host=localhost;Database=albumviewer;Username=postgres;Password=yourpassword"
dotnet run
```

Navigate to `http://localhost:5000`. On first run, `EnsureCreated()` builds the schema and seeds data from `albums.js`.

**Default login:** `test` / `test`

### Frontend (current — pre-built Angular 11)

Served from `wwwroot` by the backend. No separate frontend process needed for API testing.

### Frontend (upcoming — Angular 22 + Angular Material)

See [fork-setup-checklist.md Step 3](../music-db/docs/fork-setup-checklist.md).

---

## Project structure

```
src/
  AlbumViewerNetCore/     — ASP.NET Core 10 API host
  AlbumViewerBusiness/    — EF Core entities, repositories, DbContext
  AlbumViewerAngular/     — Angular frontend (Angular 11 pre-built; pending replacement)
db/
  create_database.sql     — PostgreSQL database creation script
```

---

## Provenance

Original: [RickStrahl/AlbumViewerVNext](https://github.com/RickStrahl/AlbumViewerVNext) — MIT licence.

This fork is part of the music-db migration project and is not intended as a general-purpose sample.
