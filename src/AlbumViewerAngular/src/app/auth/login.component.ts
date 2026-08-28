import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../core/notification.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `
    <div class="login-form">
      <h2>Sign In</h2>
      <mat-form-field>
        <mat-label>Username</mat-label>
        <input matInput [(ngModel)]="username" />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Password</mat-label>
        <input matInput type="password" [(ngModel)]="password" />
      </mat-form-field>
      @if (error) { <p class="login-error">{{ error }}</p> }
      <button mat-flat-button (click)="login()">Sign In</button>
    </div>
  `,
  styles: [`
    .login-form {
      max-width: 320px;
      margin: var(--av-login-margin, 80px auto);
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .login-error {
      color: var(--av-color-error, var(--mat-sys-error));
      font-size: var(--av-font-size-secondary, 0.875rem);
      margin: 0;
    }
  `],
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  private notify = inject(NotificationService);

  username = '';
  password = '';
  error = '';

  login() {
    this.error = '';
    this.auth.authenticate(this.username, this.password).subscribe({
      next: () => { this.notify.success('Signed in'); this.router.navigate(['/albums']); },
      error: () => { this.error = 'Invalid username or password'; this.notify.error('Login failed'); },
    });
  }
}

