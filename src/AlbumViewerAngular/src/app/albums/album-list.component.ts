import { Component, inject, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AlbumService } from '../services/album.service';
import { AppConfig } from '../core/app-config';
import { Album } from '../models/entities';
import { NO_COVER_SVG } from '../core/no-cover';

@Component({
  selector: 'app-album-list',
  imports: [MatCardModule, MatIconModule],
  styleUrl: './album-list.component.scss',
  template: `
    <div class="list-header">
      <span class="page-header-text">
        <mat-icon>album</mat-icon> Albums
        <span class="count">{{ filtered().length }}</span>
      </span>
    </div>

    <div class="album-grid">
      @for (album of filtered(); track album.Id) {
        <div class="album" (click)="open(album)">
          <img [src]="album.ImageUrl || noCover"
               [alt]="album.Title"
               class="album-image"
               (error)="onImgError($event)" />
          <div class="album-info">
            <div class="album-title">{{ album.Title }}</div>
            <div class="album-artist">by <b>{{ album.Artist?.ArtistName }}</b>
              {{ album.Year ? 'in ' + album.Year : '' }}
            </div>
            <div class="album-descript">{{ album.Description }}</div>
          </div>
        </div>
      }
    </div>
  `,
})
export class AlbumListComponent implements OnInit, OnDestroy {
  private albums = inject(AlbumService);
  private router = inject(Router);
  private appConfig = inject(AppConfig);

  protected readonly noCover = NO_COVER_SVG;
  private allAlbums = signal<Album[]>([]);
  protected filtered = computed(() => {
    const q = this.appConfig.searchText().toLowerCase();
    if (!q) return this.allAlbums();
    return this.allAlbums().filter(a =>
      a.Title.toLowerCase().includes(q) ||
      a.Artist?.ArtistName?.toLowerCase().includes(q)
    );
  });

  ngOnInit() {
    this.appConfig.isSearchAllowed.set(true);
    this.appConfig.searchText.set('');
    this.albums.getAlbums().subscribe(list => {
      this.allAlbums.set(list);
      window.scrollTo({ top: this.albums.listScrollPos, behavior: 'instant' });
    });
  }

  ngOnDestroy() {
    this.appConfig.isSearchAllowed.set(false);
  }

  open(album: Album) {
    this.albums.listScrollPos = window.scrollY;
    this.albums.album = album;
    this.router.navigate(['/album', album.Id]);
  }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (!img.dataset['fallback']) { img.dataset['fallback'] = '1'; img.src = NO_COVER_SVG; }
  }
}

