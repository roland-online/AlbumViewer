import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ArtistService } from '../services/artist.service';
import { AuthService } from '../services/auth.service';
import { AlbumService } from '../services/album.service';
import { ErrorDisplayComponent } from '../core/error-display.component';
import { NotificationService } from '../core/notification.service';
import { Artist, Album } from '../models/entities';
import { NO_COVER_SVG } from '../core/no-cover';

@Component({
  selector: 'app-artist-detail',
  imports: [RouterLink, MatButtonModule, MatIconModule, MatProgressBarModule, ErrorDisplayComponent],
  styleUrl: './artist-detail.component.scss',
  template: `
    @if (artist()) {
      <div class="artist-layout">
        <div class="btn-group" role="group">
          <a mat-flat-button routerLink="/artists">
            <span class="material-icons">view_list</span> Artists
          </a>
          @if (auth.isAuthenticated()) {
            <button mat-flat-button (click)="edit()">
              <span class="material-icons">edit_note</span> Edit
            </button>
            <button mat-flat-button (click)="remove()">
              <span class="material-icons">delete_forever</span> Delete
            </button>
          }
        </div>

        <app-error-display [error]="errorMsg()" (dismiss)="errorMsg.set('')" />

        <h2 class="artist-name">{{ artist()!.ArtistName }}</h2>
        <hr class="separator" />

        <div class="artist-header">
          <img [src]="artist()!.ImageUrl || noCover"
               [alt]="artist()!.ArtistName"
               (error)="onImgError($event)"
               class="artist-img" />
          <div class="artist-info">
            <div class="description line-breaks">{{ artist()!.Description }}</div>
            @if (artist()!.AmazonUrl) {
              <a [href]="artist()!.AmazonUrl" target="_blank" class="media-link">
                <mat-icon>language</mat-icon> {{ artist()!.ArtistName }} on the Web
              </a>
            }
          </div>
        </div>

        <h2>Albums ({{ artist()!.Albums?.length }})</h2>

        <div class="album-grid">
          @for (album of artist()!.Albums; track album.Id) {
            <div class="album" (click)="openAlbum(album)">
              @if (auth.isAuthenticated()) {
                <div class="album-overlay" (click)="$event.stopPropagation()">
                  <a [routerLink]="['/album/edit', album.Id]">
                    <mat-icon>edit_note</mat-icon>
                  </a>
                  <a (click)="deleteAlbum(album)">
                    <mat-icon>delete_forever</mat-icon>
                  </a>
                </div>
              }
              <div class="album-body">
                <img [src]="album.ImageUrl || noCover"
                     [alt]="album.Title"
                     class="album-image"
                     (error)="onImgError($event)" />
                <div class="album-info">
                  <div class="album-title">{{ album.Title }}</div>
                  <div class="album-artist">{{ album.Year ? 'in ' + album.Year : '' }}</div>
                  <div class="album-descript">{{ album.Description }}</div>
                </div>
              </div>
            </div>
          }
        </div>

        <div class="add-album-btn">
          <button mat-flat-button class="add-btn" (click)="addAlbum()">
            <span class="material-icons">add</span> Add Album
          </button>
        </div>
      </div>
    } @else {
      <mat-progress-bar mode="indeterminate" />
    }
  `,
})
export class ArtistDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private artistService = inject(ArtistService);
  private albumService = inject(AlbumService);
  protected auth = inject(AuthService);

  protected readonly noCover = NO_COVER_SVG;
  artist = signal<Artist | null>(null);
  errorMsg = signal('');
  private notify = inject(NotificationService);

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.artistService.getArtist(id).subscribe(result => this.artist.set(result.Artist));
  }

  edit() {
    this.router.navigate(['/artist/edit', this.artist()!.Id]);
  }

  openAlbum(album: Album) {
    this.router.navigate(['/album', album.Id]);
  }

  addAlbum() {
    this.router.navigate(['/album/edit', 0], { queryParams: { artistId: this.artist()!.Id } });
  }

  deleteAlbum(album: Album) {
    if (!confirm(`Delete "${album.Title}"?`)) return;
    this.albumService.deleteAlbum(album).subscribe({
      next: () => {
        this.notify.success('Album deleted');
        const a = this.artist()!;
        this.artist.set({ ...a, Albums: a.Albums?.filter(x => x.Id !== album.Id) });
      },
      error: err => this.errorMsg.set(err?.error?.message ?? err?.message ?? 'Delete failed'),
    });
  }

  remove() {
    const a = this.artist();
    if (!a || !confirm(`Delete "${a.ArtistName}" and all their albums?`)) return;
    this.artistService.deleteArtist(a).subscribe({
      next: () => { this.notify.success('Artist deleted'); this.router.navigate(['/albums']); },
      error: err => this.errorMsg.set(err?.error?.message ?? err?.message ?? 'Delete failed'),
    });
  }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (!img.dataset['fallback']) { img.dataset['fallback'] = '1'; img.src = NO_COVER_SVG; }
  }
}


