import { Component, inject, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AlbumService } from '../services/album.service';
import { AppConfig } from '../core/app-config';
import { AuthService } from '../services/auth.service';
import { ErrorDisplayComponent } from '../core/error-display.component';
import { NotificationService } from '../core/notification.service';
import { Album } from '../models/entities';
import { NO_COVER_SVG } from '../core/no-cover';

@Component({
  selector: 'app-album-list',
  imports: [RouterLink, MatIconModule, MatButtonModule, MatProgressBarModule, ErrorDisplayComponent],
  styleUrl: './album-list.component.scss',
  template: `
    @if (loading()) {
      <mat-progress-bar mode="indeterminate" />
    }
    <app-error-display [error]="errorMsg()" (dismiss)="errorMsg.set('')" />

    <div class="list-header">
      <span class="page-header-text">
        <mat-icon>album</mat-icon> Albums
        <span class="count">{{ filtered().length }}</span>
      </span>
      @if (auth.isAuthenticated()) {
        <a mat-flat-button routerLink="/album/edit/0" class="add-btn">
          <mat-icon>add</mat-icon> Add Album
        </a>
      }
    </div>

    <div class="album-grid">
      @for (album of filtered(); track album.Id) {
        <div class="album" (click)="open(album)">
          @if (auth.isAuthenticated()) {
            <div class="album-overlay" (click)="$event.stopPropagation()">
              <a [routerLink]="['/album/edit', album.Id]">
                <mat-icon>edit</mat-icon>
              </a>
              <a (click)="deleteAlbum(album)">
                <mat-icon>close</mat-icon>
              </a>
            </div>
          }
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
  protected auth = inject(AuthService);
  private notify = inject(NotificationService);

  protected readonly noCover = NO_COVER_SVG;
  protected loading = signal(true);
  protected errorMsg = signal('');
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
    this.albums.getAlbums().subscribe({
      next: list => {
        this.allAlbums.set(list);
        this.loading.set(false);
        window.scrollTo({ top: this.albums.listScrollPos, behavior: 'instant' });
      },
      error: err => { this.loading.set(false); this.errorMsg.set(err?.error?.message ?? err?.message ?? 'Failed to load albums'); },
    });
  }

  ngOnDestroy() {
    this.appConfig.isSearchAllowed.set(false);
  }

  deleteAlbum(album: Album) {
    if (!confirm(`Delete "${album.Title}"?`)) return;
    this.albums.deleteAlbum(album).subscribe({
      next: () => this.notify.success('Album deleted'),
      error: err => this.errorMsg.set(err?.error?.message ?? err?.message ?? 'Delete failed'),
    });
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


