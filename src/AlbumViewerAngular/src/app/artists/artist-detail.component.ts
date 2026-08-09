import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ArtistService } from '../services/artist.service';
import { AuthService } from '../services/auth.service';
import { Artist, Album } from '../models/entities';
import { NO_COVER_SVG } from '../core/no-cover';

@Component({
  selector: 'app-artist-detail',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  styleUrl: './artist-detail.component.scss',
  template: `
    @if (artist()) {
      <div class="artist-layout">
        <div class="artist-header">
          <img [src]="artist()!.ImageUrl || noCover"
               [alt]="artist()!.ArtistName"
               (error)="onImgError($event)"
               class="artist-img" />
          <div class="artist-info">
            <h1>{{ artist()!.ArtistName }}</h1>
            <p>{{ artist()!.Description }}</p>
            @if (auth.isAuthenticated()) {
              <div class="header-actions">
                <button mat-flat-button (click)="edit()">
                  <mat-icon>edit</mat-icon> Edit
                </button>
                <button mat-stroked-button color="warn" (click)="remove()">
                  <mat-icon>delete</mat-icon> Delete Artist
                </button>
                <button mat-flat-button (click)="addAlbum()">
                  <mat-icon>add</mat-icon> Add Album
                </button>
              </div>
            }
          </div>
        </div>

        <h2>Albums ({{ artist()!.Albums?.length }})</h2>
        <div class="album-grid">
          @for (album of artist()!.Albums; track album.Id) {
            <mat-card class="album-card" (click)="openAlbum(album)">
              <img mat-card-image
                   [src]="album.ImageUrl || noCover"
                   [alt]="album.Title"
                   (error)="onImgError($event)" />
              <mat-card-content>
                <div class="album-title">{{ album.Title }}</div>
                <div class="album-year">{{ album.Year }}</div>
              </mat-card-content>
            </mat-card>
          }
        </div>
      </div>
    } @else {
      <p class="loading">Loading…</p>
    }
  `,
})
export class ArtistDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private artistService = inject(ArtistService);
  protected auth = inject(AuthService);

  protected readonly noCover = NO_COVER_SVG;
  artist = signal<Artist | null>(null);

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

  remove() {
    const a = this.artist();
    if (!a || !confirm(`Delete "${a.ArtistName}" and all their albums?`)) return;
    this.artistService.deleteArtist(a).subscribe(() =>
      this.router.navigate(['/albums'])
    );
  }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (!img.dataset['fallback']) { img.dataset['fallback'] = '1'; img.src = NO_COVER_SVG; }
  }
}

