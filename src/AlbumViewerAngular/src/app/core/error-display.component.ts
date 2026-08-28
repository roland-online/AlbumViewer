import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-error-display',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  template: `
    @if (error()) {
      <div class="error-banner" role="alert">
        <mat-icon>error_outline</mat-icon>
        <span class="error-message">{{ error() }}</span>
        <button mat-icon-button (click)="dismiss.emit()" aria-label="Dismiss">
          <mat-icon>close</mat-icon>
        </button>
      </div>
    }
  `,
  styles: [`
    .error-banner {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 12px;
      margin-bottom: 12px;
      background: var(--av-color-error-bg, color-mix(in srgb, var(--mat-sys-error) 8%, transparent));
      border-left: 4px solid var(--av-color-error, var(--mat-sys-error));
      border-radius: var(--av-radius-standard, 4px);
      color: var(--av-color-error, var(--mat-sys-error));
    }
    .error-message { flex: 1; }
  `],
})
export class ErrorDisplayComponent {
  error = input<string>('');
  dismiss = output<void>();
}

