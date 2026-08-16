import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppConfig } from '../core/app-config';
import { Artist, ArtistResult, ArtistLookupItem } from '../models/entities';

@Injectable({ providedIn: 'root' })
export class ArtistService {
  private http = inject(HttpClient);
  private config = inject(AppConfig);

  artistList: Artist[] = [];
  artist: Artist | null = null;
  listScrollPos = 0;

  getArtists(force = false) {
    if (!force && this.artistList.length > 0) return of(this.artistList);
    return this.http.get<Artist[]>(this.config.url('artists')).pipe(
      tap(list => (this.artistList = list)),
      catchError(err => throwError(() => err))
    );
  }

  getArtist(id: number) {
    return this.http.get<ArtistResult>(this.config.url('artist', id)).pipe(
      tap(result => {
        this.artist = result.Artist;
        this.artist.Albums = result.Albums;
        this.artist.AlbumCount = result.Albums.length;
      }),
      catchError(err => throwError(() => err))
    );
  }

  saveArtist(artist: Artist) {
    return this.http.post<ArtistResult>(this.config.url('saveArtist'), artist).pipe(
      tap(result => {
        this.artist = result.Artist;
        this.artist.Albums = result.Albums;
        this.artist.AlbumCount = result.Albums.length;
        this.updateArtistInList(result.Artist);
      }),
      catchError(err => throwError(() => err))
    );
  }

  deleteArtist(artist: Artist) {
    return this.http.delete<boolean>(this.config.url('artist', artist.Id)).pipe(
      tap(() => (this.artistList = this.artistList.filter(a => a.Id !== artist.Id))),
      catchError(err => throwError(() => err))
    );
  }

  lookupArtists(search: string) {
    return this.http.get<ArtistLookupItem[]>(`${this.config.url('artistLookup')}?search=${encodeURIComponent(search)}`);
  }

  private updateArtistInList(artist: Artist): void {
    const idx = this.artistList.findIndex(a => a.Id === artist.Id);
    if (idx < 0) this.artistList.push(artist);
    else this.artistList[idx] = artist;
  }
}

