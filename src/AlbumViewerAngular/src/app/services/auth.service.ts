import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppConfig } from '../core/app-config';
import { TokenInfo } from '../models/entities';

const TOKEN_KEY = 'av_token';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private config = inject(AppConfig);

  private _token = localStorage.getItem(TOKEN_KEY) ?? '';
  readonly isAuthenticated = signal(!!this._token);

  get token(): string { return this._token; }

  private setToken(token: string): void {
    this._token = token;
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
      this.isAuthenticated.set(true);
    } else {
      localStorage.removeItem(TOKEN_KEY);
      this.isAuthenticated.set(false);
    }
  }

  authenticate(username: string, password: string) {
    return this.http.post<TokenInfo>(this.config.url('authenticate'), { username, password }).pipe(
      tap(info => this.setToken(info.token)),
      catchError(err => { this.setToken(''); return throwError(() => err); })
    );
  }

  logout() {
    return this.http.get<boolean>(this.config.url('logout')).pipe(
      tap(() => this.setToken(''))
    );
  }

  checkAuthentication() {
    return this.http.get<boolean>(this.config.url('isAuthenticated')).pipe(
      tap(result => this.isAuthenticated.set(result)),
      catchError(err => { this.setToken(''); return throwError(() => err); })
    );
  }
}

