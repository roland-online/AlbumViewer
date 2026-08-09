import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AlbumService } from '../services/album.service';
import { ArtistService } from '../services/artist.service';
import { Album, Artist, Track } from '../models/entities';

@Component({
  selector: 'app-album-editor',
  imports: [
    FormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,
    MatAutocompleteModule,
  ],
  styleUrl: './album-editor.component.scss',
  template: `
    @if (album()) {
      <div class="editor-layout">
        <h2>{{ album()!.Id ? 'Edit Album' : 'New Album' }}</h2>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Title</mat-label>
          <input matInput [(ngModel)]="album()!.Title" required />
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Artist</mat-label>
          <input matInput [(ngModel)]="artistName"
                 [matAutocomplete]="artistAc"
                 (input)="lookupArtist($event)" />
          <mat-autocomplete #artistAc (optionSelected)="selectArtist($event.option.value)">
            @for (a of artistSuggestions(); track a.Id) {
              <mat-option [value]="a">{{ a.ArtistName }}</mat-option>
            }
          </mat-autocomplete>
        </mat-form-field>

        <div class="row">
          <mat-form-field appearance="outline">
            <mat-label>Year</mat-label>
            <input matInput type="number" [(ngModel)]="album()!.Year" />
          </mat-form-field>

          <mat-form-field appearance="outline" class="flex-grow">
            <mat-label>Image URL</mat-label>
            <input matInput [(ngModel)]="album()!.ImageUrl" />
          </mat-form-field>
        </div>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Description</mat-label>
          <textarea matInput [(ngModel)]="album()!.Description" rows="4"></textarea>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Amazon URL</mat-label>
          <input matInput [(ngModel)]="album()!.AmazonUrl" />
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Spotify URL</mat-label>
          <input matInput [(ngModel)]="album()!.SpotifyUrl" />
        </mat-form-field>

        <!-- Track list -->
        <h3>Tracks</h3>
        <div class="tracks">
          @for (track of album()!.Tracks; track track.Id || $index; let i = $index) {
            <div class="track-row">
              <span class="track-num">{{ i + 1 }}</span>
              <mat-form-field appearance="outline" class="flex-grow">
                <input matInput [(ngModel)]="track.SongName" placeholder="Song name" />
              </mat-form-field>
              <mat-form-field appearance="outline" class="track-len">
                <input matInput [(ngModel)]="track.Length" placeholder="Length" />
              </mat-form-field>
              <button mat-icon-button color="warn" (click)="removeTrack(track)">
                <mat-icon>remove_circle_outline</mat-icon>
              </button>
            </div>
          }
          <button mat-stroked-button (click)="addTrack()">
            <mat-icon>add</mat-icon> Add Track
          </button>
        </div>

        @if (error()) { <p class="error">{{ error() }}</p> }

        <div class="actions">
          <button mat-flat-button (click)="save()">Save</button>
          <button mat-stroked-button (click)="cancel()">Cancel</button>
        </div>
      </div>
    }
  `,
})
export class AlbumEditorComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);
  private artistService = inject(ArtistService);

  album = signal<Album | null>(null);
  artistName = '';
  artistSuggestions = signal<Artist[]>([]);
  error = signal('');

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    const artistId = +(this.route.snapshot.queryParamMap.get('artistId') ?? 0);

    if (id > 0) {
      this.albumService.getAlbum(id).subscribe(a => {
        this.album.set(a);
        this.artistName = a.Artist?.ArtistName ?? '';
      });
    } else {
      this.album.set(this.albumService.newAlbum(artistId));
      if (artistId) {
        const cached = this.artistService.artistList.find(a => a.Id === artistId);
        if (cached) this.artistName = cached.ArtistName;
      }
    }
  }

  lookupArtist(event: Event) {
    const q = (event.target as HTMLInputElement).value;
    if (q.length < 2) { this.artistSuggestions.set([]); return; }
    this.artistService.lookupArtists(q).subscribe(list => this.artistSuggestions.set(list));
  }

  selectArtist(artist: Artist) {
    this.artistName = artist.ArtistName;
    const a = this.album()!;
    a.ArtistId = artist.Id;
    a.Artist = artist;
  }

  addTrack() { this.albumService.addTrack(); }

  removeTrack(track: Track) { this.albumService.removeTrack(track); }

  save() {
    this.error.set('');
    const a = this.album();
    if (!a) return;
    if (this.artistName && !a.Artist?.ArtistName) {
      a.Artist = { ...a.Artist!, ArtistName: this.artistName };
    }
    this.albumService.saveAlbum(a).subscribe({
      next: saved => this.router.navigate(['/album', saved.Id]),
      error: err => this.error.set(err?.message ?? 'Save failed'),
    });
  }

  cancel() {
    const id = this.album()?.Id;
    this.router.navigate(id ? ['/album', id] : ['/albums']);
  }
}

