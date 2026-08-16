import { Component, inject, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { ArtistService } from '../services/artist.service';
import { AppConfig } from '../core/app-config';
import { ErrorDisplayComponent } from '../core/error-display.component';
import { Artist } from '../models/entities';
import { NO_COVER_SVG } from '../core/no-cover';

@Component({
  selector: 'app-artist-list',
  imports: [MatIconModule, MatProgressBarModule, MatListModule, ErrorDisplayComponent],
  styleUrl: './artist-list.component.scss',
  template: `
    @if (loading()) {
      <mat-progress-bar mode="indeterminate" />
    }
    <app-error-display [error]="errorMsg()" (dismiss)="errorMsg.set('')" />

    <div class="list-header">
      <span class="page-header-text">
        <mat-icon>group</mat-icon> Artists
        <span class="count">{{ filtered().length }}</span>
      </span>
    </div>

    <!-- this div being replaced by mat-list below -->
    <div class="artist-list" style="display: none;">
      @for (artist of filtered(); track artist.Id) {
        <div class="artist-row" (click)="open(artist)" role="button">
          <mat-icon class="artist-icon">group</mat-icon>
          <span class="artist-count">{{ artist.AlbumCount }}</span>
          <span class="artist-name">{{ artist.ArtistName }}</span>
          <img [src]="artist.ImageUrl || noCover"
               [alt]="artist.ArtistName"
               class="artist-thumb"
               (error)="onImgError($event)" />
        </div>
      }
    </div>

    <mat-list class="artist-list">
      @for (artist of filtered(); track artist.Id) {
        <mat-list-item class="artist-row" (click)="open(artist)" role="button">
          <mat-icon class="artist-icon">group</mat-icon>
          <span class="artist-count">{{ artist.AlbumCount }}</span>
          <span class="artist-name">{{ artist.ArtistName }}</span>
          <img [src]="artist.ImageUrl || noCover"
               [alt]="artist.ArtistName"
               class="artist-thumb"
               (error)="onImgError($event)" />
        </mat-list-item>
      }
    </mat-list>
  `,
})
export class ArtistListComponent implements OnInit, OnDestroy {
  private artistService = inject(ArtistService);
  private router = inject(Router);
  private appConfig = inject(AppConfig);

  protected readonly noCover = NO_COVER_SVG;
  protected loading = signal(true);
  protected errorMsg = signal('');
  private allArtists = signal<Artist[]>([]);
  protected filtered = computed(() => {
    const q = this.appConfig.searchText().toLowerCase();
    if (!q) return this.allArtists();
    return this.allArtists().filter(a => a.ArtistName.toLowerCase().includes(q));
  });

  ngOnInit() {
    this.appConfig.isSearchAllowed.set(true);
    this.appConfig.searchText.set('');
    this.artistService.getArtists().subscribe({
      next: list => {
        this.allArtists.set(list);
        this.loading.set(false);
        window.scrollTo({ top: this.artistService.listScrollPos, behavior: 'instant' });
      },
      error: err => { this.loading.set(false); this.errorMsg.set(err?.error?.message ?? err?.message ?? 'Failed to load artists'); },
    });
  }

  ngOnDestroy() {
    this.appConfig.isSearchAllowed.set(false);
  }

  open(artist: Artist) {
    this.artistService.listScrollPos = window.scrollY;
    this.router.navigate(['/artist', artist.Id]);
  }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (!img.dataset['fallback']) { img.dataset['fallback'] = '1'; img.src = NO_COVER_SVG; }
  }
}

