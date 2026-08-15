import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AlbumService } from '../services/album.service';
import { AuthService } from '../services/auth.service';
import { ErrorDisplayComponent } from '../core/error-display.component';
import { Album } from '../models/entities';
import { NO_COVER_SVG } from '../core/no-cover';

@Component({
  selector: 'app-album-detail',
  imports: [RouterLink, MatButtonModule, MatIconModule, MatListModule, MatDividerModule, MatProgressBarModule, ErrorDisplayComponent],
  styleUrl: './album-detail.component.scss',
  template: `
    @if (album()) {
      <div class="detail-layout">
        <app-error-display [error]="errorMsg()" (dismiss)="errorMsg.set('')" />
        <div class="cover-panel">
          <img [src]="album()!.ImageUrl || noCover"
               [alt]="album()!.Title"
               (error)="onImgError($event)"
               class="cover-img" />
          @if (auth.isAuthenticated()) {
            <div class="cover-actions">
              <button mat-flat-button (click)="edit()">
                <mat-icon>edit</mat-icon> Edit
              </button>
              <button mat-stroked-button color="warn" (click)="remove()">
                <mat-icon>delete</mat-icon> Delete
              </button>
            </div>
          }
        </div>

        <div class="info-panel">
          <h1>{{ album()!.Title }}</h1>
          <h2>
            <a [routerLink]="['/artist', album()!.Artist?.Id]">{{ album()!.Artist?.ArtistName }}</a>
            @if (album()!.Year) { · {{ album()!.Year }} }
          </h2>
          <p class="description">{{ album()!.Description }}</p>
          <mat-divider />

          <mat-list class="track-list">
            @for (track of album()!.Tracks; track track.Id; let i = $index) {
              <mat-list-item>
                <span matListItemMeta class="track-num">{{ i + 1 }}</span>
                <span matListItemTitle>{{ track.SongName }}</span>
                <span matListItemLine class="track-len">{{ track.Length }}</span>
              </mat-list-item>
            }
          </mat-list>
        </div>
      </div>
    } @else {
      <mat-progress-bar mode="indeterminate" />
    }
  `,
})
export class AlbumDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);
  protected auth = inject(AuthService);

  protected readonly noCover = NO_COVER_SVG;
  album = signal<Album | null>(null);
  errorMsg = signal('');

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.albumService.getAlbum(id).subscribe(a => this.album.set(a));
  }

  edit() {
    this.router.navigate(['/album/edit', this.album()!.Id]);
  }

  remove() {
    const a = this.album();
    if (!a || !confirm(`Delete "${a.Title}"?`)) return;
    this.albumService.deleteAlbum(a).subscribe({
      next: () => this.router.navigate(['/albums']),
      error: err => this.errorMsg.set(err?.message ?? 'Delete failed'),
    });
  }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (!img.dataset['fallback']) { img.dataset['fallback'] = '1'; img.src = NO_COVER_SVG; }
  }
}

