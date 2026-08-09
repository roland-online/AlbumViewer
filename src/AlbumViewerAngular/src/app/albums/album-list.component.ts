import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/entities';
import { NO_COVER_SVG } from '../core/no-cover';

@Component({
  selector: 'app-album-list',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule],
  styleUrl: './album-list.component.scss',
  template: `
    <div class="list-header">
      <mat-form-field appearance="outline" class="search-field">
        <mat-label>Search albums</mat-label>
        <input matInput [(ngModel)]="searchText" (ngModelChange)="onSearch($event)" />
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
      <span class="count">{{ filtered().length }} albums</span>
    </div>

    <div class="album-grid">
      @for (album of filtered(); track album.Id) {
        <mat-card class="album-card" (click)="open(album)">
          <img mat-card-image
               [src]="album.ImageUrl || noCover"
               [alt]="album.Title"
               (error)="onImgError($event)" />
          <mat-card-content>
            <div class="album-title">{{ album.Title }}</div>
            <div class="album-artist">{{ album.Artist?.ArtistName }}</div>
            <div class="album-year">{{ album.Year }}</div>
          </mat-card-content>
        </mat-card>
      }
    </div>
  `,
})
export class AlbumListComponent implements OnInit {
  private albums = inject(AlbumService);
  private router = inject(Router);

  protected readonly noCover = NO_COVER_SVG;
  searchText = '';
  private allAlbums = signal<Album[]>([]);
  protected filtered = computed(() => {
    const q = this.searchText.toLowerCase();
    if (!q) return this.allAlbums();
    return this.allAlbums().filter(a =>
      a.Title.toLowerCase().includes(q) ||
      a.Artist?.ArtistName?.toLowerCase().includes(q)
    );
  });

  ngOnInit() {
    this.albums.getAlbums().subscribe(list => this.allAlbums.set(list));
  }

  onSearch(_: string) {
    // computed() reacts to searchText change via ngModel; method exists for clarity
  }

  open(album: Album) {
    this.albums.album = album;
    this.router.navigate(['/album', album.Id]);
  }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (!img.dataset['fallback']) { img.dataset['fallback'] = '1'; img.src = NO_COVER_SVG; }
  }
}

