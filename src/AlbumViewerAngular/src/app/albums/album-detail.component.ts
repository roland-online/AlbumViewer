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
import { NotificationService } from '../core/notification.service';
import { Album } from '../models/entities';
import { NO_COVER_SVG } from '../core/no-cover';

@Component({
  selector: 'app-album-detail',
  imports: [RouterLink, MatButtonModule, MatIconModule, MatListModule, MatDividerModule, MatProgressBarModule, ErrorDisplayComponent],
  styleUrl: './album-detail.component.scss',
  template: `
    @if (album()) {
      <div class="detail-container">
        <div class="btn-group" role="group">
          <a mat-stroked-button routerLink="/albums">
            <mat-icon>list</mat-icon> Albums
          </a>
          @if (auth.isAuthenticated()) {
            <a mat-stroked-button [routerLink]="['/album/edit', album()!.Id]">
              <mat-icon>edit</mat-icon> Edit
            </a>
          }
          @if (album()!.AmazonUrl) {
            <a mat-stroked-button [href]="album()!.AmazonUrl" target="_amazon">
              <mat-icon>attach_money</mat-icon> Buy
            </a>
          }
          @if (auth.isAuthenticated()) {
            <button mat-stroked-button color="warn" (click)="remove()">
              <mat-icon>delete</mat-icon> Delete
            </button>
          }
        </div>

        <app-error-display [error]="errorMsg()" (dismiss)="errorMsg.set('')" />

        <div class="detail-layout">
          <div class="cover-panel">
            <img [src]="album()!.ImageUrl || noCover"
                 [alt]="album()!.Title"
                 (error)="onImgError($event)"
                 class="cover-img" />
          </div>

          <div class="info-panel">
            <h2 class="album-title-big">{{ album()!.Title }}</h2>
            <div class="album-artist">
              by <a [routerLink]="['/artist', album()!.Artist?.Id]">{{ album()!.Artist?.ArtistName }}</a>
              {{ album()!.Year ? 'in ' + album()!.Year : '' }}
            </div>
            @if (album()!.AmazonUrl) {
              <a [href]="album()!.AmazonUrl" target="_amazon" class="media-link">
                <mat-icon>attach_money</mat-icon> Buy
              </a>
            }
            @if (album()!.SpotifyUrl) {
              <a [href]="album()!.SpotifyUrl" target="_spotify" class="media-link">
                <mat-icon>volume_up</mat-icon> Play
              </a>
            }
            <div class="description line-breaks">{{ album()!.Description }}</div>
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

            <hr />
            <div class="more-from">
              More from
              <a [routerLink]="['/artist', album()!.Artist?.Id]">
                {{ album()!.Artist?.ArtistName }}<br />
                @if (album()!.Artist?.ImageUrl) {
                  <img [src]="album()!.Artist!.ImageUrl!"
                       (error)="onImgError($event)"
                       class="artist-thumb" />
                }
              </a>
            </div>
          </div>
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
  private notify = inject(NotificationService);

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.albumService.getAlbum(id).subscribe(a => this.album.set(a));
  }

  remove() {
    const a = this.album();
    if (!a || !confirm(`Delete "${a.Title}"?`)) return;
    this.albumService.deleteAlbum(a).subscribe({
      next: () => { this.notify.success('Album deleted'); this.router.navigate(['/albums']); },
      error: err => this.errorMsg.set(err?.error?.message ?? err?.message ?? 'Delete failed'),
    });
  }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (!img.dataset['fallback']) { img.dataset['fallback'] = '1'; img.src = NO_COVER_SVG; }
  }
}


