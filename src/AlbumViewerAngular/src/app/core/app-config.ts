import { Injectable } from '@angular/core';

const API_PATHS: Record<string, string> = {
  albums:          'albums',
  album:           'album',
  artists:         'artists',
  artist:          'artist',
  artistLookup:    'artistlookup',
  saveArtist:      'artist',
  authenticate:    'authenticate',
  logout:          'logout',
  isAuthenticated: 'isAuthenticated',
  applicationStats:'applicationstats',
};

@Injectable({ providedIn: 'root' })
export class AppConfig {
  readonly apiBase = 'api/';

  url(name: string, ...params: (string | number)[]): string {
    let url = this.apiBase + (API_PATHS[name] ?? name);
    for (const p of params) url += '/' + p;
    return url;
  }
}
