# AlbumViewer API Reference

Generated from code review — 2026-08-07. Re-verified against controller source — 2026-08-27.
Base URL: `http://localhost:5000` (dev). OpenAPI doc: `GET /openapi/v1.json` — currently reachable but returns an empty `paths: {}`; this document is the source of truth until that's fixed (see checklist D.1a).

Auth: JWT Bearer. Obtain token from `POST /api/authenticate`. Pass as `Authorization: Bearer {token}`.
Write endpoints require auth. Read endpoints are open unless noted.

---

## Auth endpoints

### `POST /api/authenticate`

Authenticate and obtain a JWT token.

**Body:** `{ "username": "test", "password": "test" }`

**Response 200:**
```json
{ "token": "eyJ...", "expires": "2026-...", "displayName": "test" }
```

**Response 401:** invalid credentials.

---

### `GET /api/isAuthenticated`

Check auth state. `[AllowAnonymous]` — always returns 200, never 401.

**Response 200:** `true` (authenticated) or `false` (not authenticated, or token expired/revoked).

---

### `GET /api/logout`

Revoke the current JWT token (adds jti to in-memory cancelled-token list).

**Response 200:** empty.

---

### `POST /api/login`

Cookie-based login (alternative to JWT). **`[Obsolete]`** — kept for reference only; use `POST /api/authenticate` instead. Not called by the Angular frontend in practice. **No integration test** — rule deviation: the consistency rule (all used endpoints have tests) is relaxed for this endpoint because it is explicitly marked obsolete in source.

---

## Album endpoints

### `GET /api/albums`

Return all albums, ordered by title. Includes `Artist` on each album. `Tracks` are **not** included in the list response (performance — not needed in list UI). Load `GET /api/album/{id}` for full detail including tracks.

**Query params:**
- `page` (int, default `-1`) — 1-based page number; `-1` or `0` returns all.
- `pageSize` (int, default `15`) — items per page when paging is active.

**Response 200:** array of `Album`.

---

### `GET /api/album/{id}`

Return a single album with `Artist` and `Tracks`.

**Response 200:** `Album` object.
**Response 204:** album not found (null controller return → ASP.NET Core No Content; not 404).

---

### `POST /api/album` 🔒

Create or update an album.

**Body:** `Album` object. `Id = 0` → insert; `Id > 0` → update.

**Artist handling:** if `Artist.Id < 1`, the repository searches for an existing artist by `ArtistName`. If found, it reuses that artist. If not found, it inserts a new artist. The posted album carries the artist's data — do not rely on the response to retrieve the generated artist id; use `GET /api/artist` after save if needed.

**Validation (500 on failure):**
- `Title` must be non-empty.
- `Description` must be at least 30 characters.
- `Tracks` must contain at least 1 entry.

**Response 200:** saved `Album` object with updated `Id`.
**Response 401:** not authenticated (thrown as `ApiException`, returned as JSON error by `IExceptionHandler`).
**Response 500:** validation failed or save error; body: `{ "message": "...", "detail": "..." }`.

---

### `DELETE /api/album/{id}` 🔒

Delete an album and all its tracks. Does **not** delete the parent artist.

**Response 200:** `true`.
**Response 401:** not authenticated.
**Response 500:** album not found or delete failed.

---

## Artist endpoints

### `GET /api/artists`

Return all artists ordered by name. Includes `AlbumCount` (derived, not a navigation property).

**Response 200:** array of `ArtistWithAlbumCount { Id, ArtistName, Description, ImageUrl, AmazonUrl, AlbumCount }`.

---

### `GET /api/artist/{id}`

Return a single artist with their full album list (each album includes `Tracks` and `Artist`).

**Response shape:** `ArtistResponse { Artist, Albums }` — **not** a flat `Artist`. Navigate `Artist.Id`, `Artist.ArtistName`, etc.; albums are at `Albums[]`.

**Response 200:** `ArtistResponse`.
**Response 404:** artist not found (artist controller throws or returns null differently from album controller — returns 404, not 204).

---

### `GET /api/artistlookup?search={term}`

Name-prefix autocomplete. Returns empty array if `search` is missing or blank.

**Response 200:** array of `{ "name": "...", "id": 123 }` where `id` is the integer artist primary key. Fixed in B.16a — was incorrectly projecting `id = ArtistName` (string) instead of the real numeric `Id`.

---

### `POST /api/artist` 🔒

Create or update an artist. `Id = 0` → insert; `Id > 0` → update.

**Validation (500 on failure):**
- `ArtistName` must be non-empty.
- `Description` must be at least 30 characters.

**Response shape:** `ArtistResponse { Artist, Albums }` — the saved artist is wrapped; `Id` is at `Artist.Id`, **not** at the root.

**Response 200:** `ArtistResponse`.
**Response 401:** not authenticated.
**Response 500:** validation failed or save error.

---

### `DELETE /api/artist/{id}` 🔒

Delete an artist and **all their albums** (and each album's tracks). Cascade is implemented in code via `AlbumRepository.DeleteAlbum`, not via a DB constraint.

If the artist does not exist, returns `true` (idempotent).

**Response 200:** `true`.
**Response 401:** not authenticated.
**Response 500:** delete failed mid-cascade.

---

## Configuration endpoints

### `GET /api/configuration`

Return the `ApplicationConfiguration` object (app name, JWT settings, mail settings, etc.).

**Response 200:** `ApplicationConfiguration`.

---

### `GET /api/applicationstats`

Return runtime environment info: OS platform, .NET version, and data provider mode (`SqLite` / `Sql Server` / `PostgreSQL`, derived from configuration). Does **not** include album/artist/track counts.

**Response 200:** `ApplicationStats { OsPlatform, AspDotnetVersion, AngularVersion, DataMode }`. `AngularVersion` is declared but never populated server-side — always `null` on the wire; the Angular client overlays its own version client-side via `document.querySelector('[ng-version]')` (parity with the original's jQuery approach).

---

## Dev / test endpoints

### `GET /api/throw`

Intentionally throws `InvalidOperationException`. Used to verify the `IExceptionHandler` error response format.

**Response 500:** `{ "message": "An unexpected error occurred.", "detail": "This is an unhandled exception" }`

---

### `GET /api/reloaddata` 🔒

Reload seed data from `albums.js`. Drops and re-imports all albums and artists.

**Response 200:** `true`.
**Response 401:** not authenticated.

---

### Undocumented action: `DeleteAlbumByName`

`AlbumViewerApiController.Albums.cs` defines a `[HttpGet]` action `DeleteAlbumByName(string name)` with no route template and no controller-level route prefix. Empirically it does not intercept `GET /` (the SPA fallback wins there) and no other plausible URL was found for it during this review — likely dead/unreachable code, not a documented part of the interface. Flagged here rather than fixed, since removing dead code is outside this doc-accuracy pass's scope.

---

## Validation summary

| Entity | Field | Rule |
|---|---|---|
| Album | `Title` | non-empty |
| Album | `Description` | ≥ 30 characters |
| Album | `Tracks` | at least 1 entry |
| Artist | `ArtistName` | non-empty |
| Artist | `Description` | ≥ 30 characters |

---

## Error response shape

All unhandled exceptions and `ApiException` throws produce:

```json
{ "message": "...", "detail": "..." }
```

HTTP status is `500` for unhandled errors; `ApiException` sets the status explicitly (401, 500, etc.).

---

## Key behavioral notes

| Behaviour | Detail |
|---|---|
| Unknown album id → 204 | Null `Album` return from controller produces 204 No Content. |
| Unknown artist id → 404 | Artist controller produces 404 (different implementation from album). |
| `POST /api/artist` response | Returns `ArtistResponse { Artist, Albums }`, not a flat `Artist`. Id is at `Artist.Id`. |
| Album save creates artist | If `Artist.Id < 1`, `SaveAlbum` matches by name or inserts a new artist automatically. |
| Angular 11 gap — artist not pre-populated | "Add Album" from artist detail navigates to `/album/edit/0` with no artist context. `addAlbum()` on `ArtistDisplay` is empty; the button uses a static `routerLink`. Fix in Angular 22: pass `artistId` as query param and pre-populate in `AlbumEditor.ngOnInit`. |
| Artist delete cascades | `DELETE /api/artist` deletes all the artist's albums and their tracks before deleting the artist. Cascade is one-directional: deleting albums does **not** auto-delete the artist. |
| Album delete is non-cascading | `DELETE /api/album` deletes the album's tracks but leaves the artist untouched, even if it becomes album-less. |
| Token revocation in-memory | Logout adds the JWT `jti` to an in-memory set. Token revocation does not survive server restart. |
