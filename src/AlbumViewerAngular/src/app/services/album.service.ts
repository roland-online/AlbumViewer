import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppConfig } from '../core/app-config';
import { Album, Track } from '../models/entities';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private http = inject(HttpClient);
  private config = inject(AppConfig);

  albumList: Album[] = [];
  album: Album | null = null;
  listScrollPos = 0;

  getAlbums() {
    return this.http.get<Album[]>(this.config.url('albums')).pipe(
      tap(list => (this.albumList = list)),
      catchError(err => throwError(() => err))
    );
  }

  getAlbum(id: number) {
    return this.http.get<Album>(this.config.url('album', id)).pipe(
      tap(album => (this.album = album)),
      catchError(err => throwError(() => err))
    );
  }

  saveAlbum(album: Album) {
    return this.http.post<Album>(this.config.url('album'), album).pipe(
      tap(saved => { this.album = saved; this.updateAlbumInList(saved); }),
      catchError(err => throwError(() => err))
    );
  }

  deleteAlbum(album: Album) {
    return this.http.delete<boolean>(this.config.url('album', album.Id)).pipe(
      tap(() => (this.albumList = this.albumList.filter(a => a.Id !== album.Id))),
      catchError(err => throwError(() => err))
    );
  }

  newAlbum(artistId = 0): Album {
    this.album = {
      Id: 0, ArtistId: artistId, Title: '', Description: '', Year: 0,
      ImageUrl: '', AmazonUrl: '', SpotifyUrl: '',
      Artist: { Id: artistId, ArtistName: '', Description: '', ImageUrl: '', AmazonUrl: '', AlbumCount: 0, Albums: [] },
      Tracks: [],
    };
    return this.album;
  }

  addTrack(): Track {
    const track: Track = { Id: 0, AlbumId: this.album?.Id ?? 0, SongName: '', Length: '', Bytes: 0, UnitPrice: 0 };
    this.album?.Tracks.push(track);
    return track;
  }

  removeTrack(track: Track): void {
    if (!this.album) return;
    const idx = this.album.Tracks.findIndex(t => t.Id === track.Id);
    if (idx > -1) this.album.Tracks.splice(idx, 1);
  }

  private updateAlbumInList(album: Album): void {
    const idx = this.albumList.findIndex(a => a.Id === album.Id);
    if (idx > -1)
      this.albumList[idx] = album;
    else {
      this.albumList.push(album);
      this.albumList.sort((a, b) => a.Title.localeCompare(b.Title));
    }
    this.albumList = this.albumList.filter(a => a.Id !== 0);
  }
}

