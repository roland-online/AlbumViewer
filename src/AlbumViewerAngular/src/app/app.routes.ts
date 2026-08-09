import { Routes } from '@angular/router';
import { AlbumListComponent } from './albums/album-list.component';
import { AlbumDetailComponent } from './albums/album-detail.component';
import { AlbumEditorComponent } from './albums/album-editor.component';
import { ArtistDetailComponent } from './artists/artist-detail.component';
import { LoginComponent } from './auth/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumListComponent },
  { path: 'album/edit/:id', component: AlbumEditorComponent },  // must precede album/:id
  { path: 'album/:id', component: AlbumDetailComponent },
  { path: 'artist/:id', component: ArtistDetailComponent },
  { path: 'login', component: LoginComponent },
];
