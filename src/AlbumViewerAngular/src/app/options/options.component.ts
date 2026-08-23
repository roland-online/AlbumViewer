import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppConfig } from '../core/app-config';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../core/notification.service';
import { ApplicationStats } from '../models/entities';

@Component({
  selector: 'app-options',
  imports: [RouterLink, FormsModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
  styleUrl: './options.component.scss',
  template: `
    <div class="options-layout">
      <div class="page-header-text">
        <mat-icon>settings</mat-icon> Options
      </div>

      <div class="options-section">
        <h3><mat-icon>refresh</mat-icon> Reset Data</h3>
        <p>Reset data to original sample data.</p>
        <button mat-flat-button (click)="reloadData()">
          <mat-icon>refresh</mat-icon> Reset Data
        </button>
      </div>

      <div class="options-section">
        <h3><mat-icon>info</mat-icon> About AlbumViewer</h3>
        @if (stats()) {
          <p><small>Server Platform: {{ stats()!.OsPlatform }}</small></p>
          <p><small>ASP.NET Version: {{ stats()!.AspDotnetVersion }}</small></p>
          <p><small>Angular Version: {{ stats()!.AngularVersion }}</small></p>
          <p><small>Data Mode: {{ stats()!.DataMode }}</small></p>
        }
        <a routerLink="/about">About AlbumViewer &rsaquo;</a>
      </div>

      <div class="options-section">
        <h3><mat-icon>code</mat-icon> GitHub</h3>
        <a href="https://github.com/RickStrahl/AlbumViewerVNext" target="_blank">
          RickStrahl/AlbumViewerVNext
        </a>
      </div>

      <div class="options-section">
        <h3><mat-icon>tune</mat-icon> Settings</h3>
        <mat-form-field>
          <mat-label>Data Http Base URL</mat-label>
          <input matInput [(ngModel)]="apiBase" placeholder="/api/" />
        </mat-form-field>
      </div>

      <div class="options-section">
        @if (auth.isAuthenticated()) {
          <button mat-stroked-button (click)="logout()">
            <mat-icon>lock</mat-icon> Sign out
          </button>
        } @else {
          <a mat-stroked-button routerLink="/login">
            <mat-icon>lock_open</mat-icon> Sign in
          </a>
        }
      </div>
    </div>
  `,
})
export class OptionsComponent implements OnInit {
  private http = inject(HttpClient);
  private config = inject(AppConfig);
  protected auth = inject(AuthService);
  private notify = inject(NotificationService);

  protected stats = signal<ApplicationStats | null>(null);
  protected apiBase = this.config.apiBase;

  ngOnInit() {
    this.http.get<ApplicationStats>(this.config.url('applicationStats'))
      .subscribe({
        next: s => {
          s.AngularVersion = document.querySelector('[ng-version]')?.getAttribute('ng-version') ?? s.AngularVersion;
          this.stats.set(s);
        },
        error: () => {}
      });
  }

  logout() {
    this.auth.logout().subscribe();
  }

  reloadData() {
    this.http.get(this.config.url('reloadData')).subscribe({
      next: () => this.notify.success('Data has been reloaded'),
      error: err => this.notify.error(err?.error?.message ?? 'Reload failed'),
    });
  }
}
