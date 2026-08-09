# AlbumViewer — music-db fork

Forked from [RickStrahl/AlbumViewerVNext](https://github.com/RickStrahl/AlbumViewerVNext).

This is a working development baseline for the music-db web application migration. The fork has been upgraded from its original .NET 8 / Angular 11 / SQLite state to a modern .NET 10 / PostgreSQL / Angular 22 + Material stack. The frontend is at functional parity with the original Angular 11 app.

---

## Security and privacy

This repository is **public** (GitHub does not allow forked repositories to be made private).

Rules that must be observed at all times:

- **No personal data** — no real album, artist, or media item data from the music-db collection; only the AlbumViewer seed data (`albums.js`) belongs here
- **No credentials** — no passwords, connection strings with passwords, API keys, or tokens committed to any file; use `dotnet user-secrets` for local dev secrets
- **No private config** — no `appsettings.*.json` overrides containing real hostnames, usernames, or environment-specific values
- **No database exports** — no SQL dumps, CSV exports, or any data derived from the live `musicdb` PostgreSQL database

All actual music-db data, schema exports, and personal content live elsewhere.

---



[`api-reference.md`](api-reference.md) documents every endpoint, its response shape, validation rules, and behavioral dependencies (cascade delete, artist auto-create, 204 vs 404 on unknown id, etc.).

[`src/AlbumViewer.Tests`](src/AlbumViewer.Tests) contains integration tests that assert all documented behaviors, including all interdependencies.

**Rule:** any change to API behavior — response shape, validation rule, cascade logic, error code — must be reflected in both `api-reference.md` and the corresponding test. If behavior and documentation disagree, the tests are the ground truth.

---

## Current state (2026-08-09)

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

### Frontend — complete

| Component | Status |
|---|---|
| Angular 22.1.1 standalone (zoneless) | ✅ |
| Angular Material 22.1.1 (Azure/Blue theme) | ✅ |
| Albums list (card grid, search) | ✅ |
| Album detail (cover, tracks, artist link) | ✅ |
| Album editor (inline track editing, artist autocomplete) | ✅ |
| Artists list (card grid, search) | ✅ |
| Artist detail (album grid) | ✅ |
| Artist editor | ✅ |
| JWT auth (login, logout, auth guard) | ✅ |
| `ng serve` dev proxy + LiveReload | ✅ |

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

### Frontend

```powershell
cd src/AlbumViewerAngular
ng serve          # dev server at localhost:4200 with /api proxy to localhost:5000
ng build          # production build to src/AlbumViewerNetCore/wwwroot
```

**Dev workflow:** run both `dotnet run` (backend) and `ng serve` (frontend) simultaneously. Use `localhost:4200` during development for hot reload. Use `localhost:5000` after `ng build` to verify production output.

> `wwwroot/` is a build artifact and is excluded from git. Run `ng build` before `dotnet run` on a fresh checkout.

**Default login:** `test` / `test`

---

## Project structure

```
src/
  AlbumViewerNetCore/     — ASP.NET Core 10 API host
  AlbumViewerBusiness/    — EF Core entities, repositories, DbContext
  AlbumViewerAngular/     — Angular 22 + Material frontend (build output → AlbumViewerNetCore/wwwroot)
  AlbumViewer.Tests/      — xUnit integration tests (26 tests, albumviewer_test DB)
db/
  create_database.sql     — PostgreSQL database creation script
```

---

## Provenance

Original: [RickStrahl/AlbumViewerVNext](https://github.com/RickStrahl/AlbumViewerVNext) — MIT licence.

This fork is part of the music-db migration project and is not intended as a general-purpose sample.

