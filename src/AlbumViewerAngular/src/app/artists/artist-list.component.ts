import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ArtistService } from '../services/artist.service';
import { Artist } from '../models/entities';
import { NO_COVER_SVG } from '../core/no-cover';

@Component({
  selector: 'app-artist-list',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule],
  styleUrl: './artist-list.component.scss',
  template: `
    <div class="list-header">
      <mat-form-field appearance="outline" class="search-field">
        <mat-label>Search artists</mat-label>
        <input matInput [(ngModel)]="searchText" />
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
      <span class="count">{{ filtered().length }} artists</span>
    </div>

    <div class="artist-grid">
      @for (artist of filtered(); track artist.Id) {
        <mat-card class="artist-card" (click)="open(artist)">
          <img mat-card-image
               [src]="artist.ImageUrl || noCover"
               [alt]="artist.ArtistName"
               (error)="onImgError($event)" />
          <mat-card-content>
            <div class="artist-name">{{ artist.ArtistName }}</div>
            <div class="album-count">{{ artist.AlbumCount }} albums</div>
          </mat-card-content>
        </mat-card>
      }
    </div>
  `,
})
export class ArtistListComponent implements OnInit {
  private artistService = inject(ArtistService);
  private router = inject(Router);

  protected readonly noCover = NO_COVER_SVG;
  searchText = '';
  private allArtists = signal<Artist[]>([]);
  protected filtered = computed(() => {
    const q = this.searchText.toLowerCase();
    if (!q) return this.allArtists();
    return this.allArtists().filter(a => a.ArtistName.toLowerCase().includes(q));
  });

  ngOnInit() {
    this.artistService.getArtists().subscribe(list => this.allArtists.set(list));
  }

  open(artist: Artist) {
    this.router.navigate(['/artist', artist.Id]);
  }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (!img.dataset['fallback']) { img.dataset['fallback'] = '1'; img.src = NO_COVER_SVG; }
  }
}
