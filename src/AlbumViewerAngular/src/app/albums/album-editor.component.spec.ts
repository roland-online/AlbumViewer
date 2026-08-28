import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AlbumEditorComponent } from './album-editor.component';
import { ArtistLookupItem } from '../models/entities';

describe('AlbumEditorComponent', () => {
  function createComponent(id = '0', artistId = '') {
    TestBed.configureTestingModule({
      imports: [AlbumEditorComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimationsAsync(),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id }),
              queryParamMap: convertToParamMap(artistId ? { artistId } : {}),
            },
          },
        },
      ],
    });
    const fixture = TestBed.createComponent(AlbumEditorComponent);
    fixture.detectChanges();
    return fixture.componentInstance;
  }

  it('creates a new album via newAlbum() when id is 0', () => {
    const component = createComponent();
    expect(component.album()).toBeTruthy();
    expect(component.album()!.Id).toBe(0);
  });

  describe('selectArtist', () => {
    it('sets ArtistId and Artist from the selected ArtistLookupItem', () => {
      const component = createComponent();
      const item: ArtistLookupItem = { id: 42, name: 'Test Artist' };

      component.selectArtist(item);

      const album = component.album()!;
      expect(album.ArtistId).toBe(42);
      expect(album.Artist.Id).toBe(42);
      expect(album.Artist.ArtistName).toBe('Test Artist');
    });

    it('updates the bound artistName field', () => {
      const component = createComponent();
      component.selectArtist({ id: 7, name: 'Motörhead' });
      expect(component.artistName).toBe('Motörhead');
    });
  });
});
