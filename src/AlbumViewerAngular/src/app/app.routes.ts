import { Routes } from '@angular/router';
import { AlbumListComponent } from './albums/album-list.component';
import { AlbumDetailComponent } from './albums/album-detail.component';
import { AlbumEditorComponent } from './albums/album-editor.component';
import { ArtistListComponent } from './artists/artist-list.component';
import { ArtistDetailComponent } from './artists/artist-detail.component';
import { ArtistEditorComponent } from './artists/artist-editor.component';
import { OptionsComponent } from './options/options.component';
import { AboutComponent } from './options/about.component';
import { LoginComponent } from './auth/login.component';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumListComponent },
  { path: 'artists', component: ArtistListComponent },
  { path: 'album/edit/:id', component: AlbumEditorComponent, canActivate: [authGuard] },
  { path: 'album/:id', component: AlbumDetailComponent },
  { path: 'artist/edit/:id', component: ArtistEditorComponent, canActivate: [authGuard] },
  { path: 'artist/:id', component: ArtistDetailComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
];

