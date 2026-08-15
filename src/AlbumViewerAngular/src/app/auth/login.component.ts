import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `
    <div style="max-width:320px;margin:80px auto;display:flex;flex-direction:column;gap:16px">
      <h2>Sign In</h2>
      <mat-form-field>
        <mat-label>Username</mat-label>
        <input matInput [(ngModel)]="username" />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Password</mat-label>
        <input matInput type="password" [(ngModel)]="password" />
      </mat-form-field>
      @if (error) { <p style="color:red">{{ error }}</p> }
      <button mat-flat-button (click)="login()">Sign In</button>
    </div>
  `,
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  username = '';
  password = '';
  error = '';

  login() {
    this.error = '';
    this.auth.authenticate(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/albums']),
      error: () => (this.error = 'Invalid username or password'),
    });
  }
}

