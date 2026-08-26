import { Component, inject } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from './services/auth.service';
import { AppConfig } from './core/app-config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule,
            MatToolbarModule, MatButtonModule, MatIconModule, MatInputModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected auth = inject(AuthService);
  protected appConfig = inject(AppConfig);
  private router = inject(Router);

  logout() {
    this.auth.logout().subscribe(() => this.router.navigate(['/login']));
  }
}
