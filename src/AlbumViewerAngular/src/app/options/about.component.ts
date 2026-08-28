import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  imports: [RouterLink, MatButtonModule, MatIconModule],
  styleUrl: './about.component.scss',
  template: `
    <div class="about-layout">
      <div class="page-header-text">
        <mat-icon>info</mat-icon> About AlbumViewer
      </div>

      <div class="about-section">
        <h4>ASP.NET Core API backend</h4>
        <p>
          This application runs an ASP.NET Core 10 API server with a JSON service backend
          using Entity Framework Core 10 with support for SQLite, SQL Server, and PostgreSQL.
        </p>
      </div>

      <div class="about-section">
        <h4>Angular Front End</h4>
        <p>
          The client interface uses Angular 22 to provide the front end logic and UI management
          features. Album and artist services talk to the backend, and standalone components
          handle individual view pages of the application.
        </p>
      </div>

      <div class="about-section">
        <h4>Angular Material Interface</h4>
        <p>
          The base Angular Material framework is used for the core UI features of the interface.
          The application is mobile-friendly and uses responsive layout across phone to full
          desktop screen sizes.
        </p>
      </div>

      <hr />
      <a mat-stroked-button routerLink="/albums">
        <mat-icon>arrow_back</mat-icon> Back to Application
      </a>
    </div>
  `,
})
export class AboutComponent {}
