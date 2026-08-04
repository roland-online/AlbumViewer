-- AlbumViewer dev database creation script
-- Run as superuser (postgres) connected to the postgres maintenance database.
--
-- Encoding, collation, and timezone settings mirror the musicdb configuration
-- used in the musicdb project (see music-db/postgres/create_database.sql).
-- This database is a temporary dev baseline; the app will eventually connect
-- directly to musicdb once the AlbumViewer fork is adapted to the music-db schema.

-- 1) Pre-check (safe to run repeatedly):
SELECT datname
FROM pg_database
WHERE datname = 'albumviewer';

-- 2) Create only if the pre-check returned no row.
-- CREATE DATABASE must be a top-level statement (not inside a transaction).
CREATE DATABASE albumviewer
    WITH
    ENCODING = 'UTF8'
    LOCALE_PROVIDER = icu
    ICU_LOCALE = 'en-001'
    TEMPLATE = template0;

COMMENT ON DATABASE albumviewer
    IS 'AlbumViewerVNext dev database — fork baseline before musicdb adaptation';

-- Per-database timezone/datestyle (mirrors musicdb settings)
ALTER DATABASE albumviewer SET timezone = 'UTC';
ALTER DATABASE albumviewer SET datestyle = 'ISO, YMD';

-- Verify
SELECT datname, datlocprovider, datlocale, pg_encoding_to_char(encoding)
FROM pg_database
WHERE datname = 'albumviewer';
