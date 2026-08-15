import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ArtistService } from '../services/artist.service';
import { ErrorDisplayComponent } from '../core/error-display.component';
import { Artist } from '../models/entities';

@Component({
  selector: 'app-artist-editor',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, ErrorDisplayComponent],
  styleUrl: './artist-editor.component.scss',
  template: `
    @if (artist()) {
      <div class="editor-layout">
        <h2>Edit Artist</h2>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Artist Name</mat-label>
          <input matInput [(ngModel)]="artist()!.ArtistName" required />
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Description</mat-label>
          <textarea matInput [(ngModel)]="artist()!.Description" rows="5"></textarea>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Image URL</mat-label>
          <input matInput [(ngModel)]="artist()!.ImageUrl" />
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Amazon URL</mat-label>
          <input matInput [(ngModel)]="artist()!.AmazonUrl" />
        </mat-form-field>

        <app-error-display [error]="error()" (dismiss)="error.set('')" />

        <div class="actions">
          <button mat-flat-button (click)="save()">Save</button>
          <button mat-stroked-button (click)="cancel()">Cancel</button>
        </div>
      </div>
    }
  `,
})
export class ArtistEditorComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private artistService = inject(ArtistService);

  artist = signal<Artist | null>(null);
  error = signal('');

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.artistService.getArtist(id).subscribe(result => this.artist.set(result.Artist));
  }

  save() {
    this.error.set('');
    const a = this.artist();
    if (!a) return;
    this.artistService.saveArtist(a).subscribe({
      next: result => this.router.navigate(['/artist', result.Artist.Id]),
      error: err => this.error.set(err?.message ?? 'Save failed'),
    });
  }

  cancel() {
    this.router.navigate(['/artist', this.artist()?.Id]);
  }
}
