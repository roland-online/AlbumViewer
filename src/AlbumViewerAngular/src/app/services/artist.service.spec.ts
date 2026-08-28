import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ArtistService } from './artist.service';
import { AppConfig } from '../core/app-config';
import { Artist, ArtistResult, ArtistLookupItem } from '../models/entities';

describe('ArtistService', () => {
  let service: ArtistService;
  let httpMock: HttpTestingController;
  let config: AppConfig;

  const mockArtist = (id: number, name: string): Artist => ({
    Id: id, ArtistName: name, Description: '', ImageUrl: '', AmazonUrl: '',
    AlbumCount: 0, Albums: [],
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ArtistService);
    httpMock = TestBed.inject(HttpTestingController);
    config = TestBed.inject(AppConfig);
  });

  afterEach(() => httpMock.verify());

  describe('getArtists', () => {
    it('fetches from the API and populates artistList', () => {
      const artists = [mockArtist(1, 'AC/DC'), mockArtist(2, 'Motörhead')];

      service.getArtists().subscribe(result => {
        expect(result).toEqual(artists);
      });

      const req = httpMock.expectOne(config.url('artists'));
      expect(req.request.method).toBe('GET');
      req.flush(artists);

      expect(service.artistList).toEqual(artists);
    });

    it('returns the cached list without an HTTP request on a second call', () => {
      const artists = [mockArtist(1, 'AC/DC')];
      service.getArtists().subscribe();
      httpMock.expectOne(config.url('artists')).flush(artists);

      service.getArtists().subscribe(result => {
        expect(result).toEqual(artists);
      });
      httpMock.expectNone(config.url('artists'));
    });

    it('re-fetches when force is true even with a populated cache', () => {
      const first = [mockArtist(1, 'AC/DC')];
      const second = [mockArtist(1, 'AC/DC'), mockArtist(2, 'Motörhead')];

      service.getArtists().subscribe();
      httpMock.expectOne(config.url('artists')).flush(first);

      service.getArtists(true).subscribe(result => {
        expect(result).toEqual(second);
      });
      httpMock.expectOne(config.url('artists')).flush(second);

      expect(service.artistList).toEqual(second);
    });
  });

  describe('getArtist', () => {
    it('fetches a single artist and derives AlbumCount from Albums.length', () => {
      const artist = mockArtist(1, 'AC/DC');
      const result: ArtistResult = {
        Artist: artist,
        Albums: [{ Id: 1 } as any, { Id: 2 } as any],
      };

      service.getArtist(1).subscribe();

      const req = httpMock.expectOne(config.url('artist', 1));
      expect(req.request.method).toBe('GET');
      req.flush(result);

      expect(service.artist).toBeTruthy();
      expect(service.artist!.Id).toBe(1);
      expect(service.artist!.Albums).toEqual(result.Albums);
      expect(service.artist!.AlbumCount).toBe(2);
    });
  });

  describe('lookupArtists', () => {
    it('builds the search URL and returns matching items', () => {
      const items: ArtistLookupItem[] = [{ id: 1, name: 'AC/DC' }];

      service.lookupArtists('AC').subscribe(result => {
        expect(result).toEqual(items);
      });

      const req = httpMock.expectOne(`${config.url('artistLookup')}?search=AC`);
      expect(req.request.method).toBe('GET');
      req.flush(items);
    });

    it('URL-encodes the search term', () => {
      service.lookupArtists('AC/DC').subscribe();
      const req = httpMock.expectOne(`${config.url('artistLookup')}?search=AC%2FDC`);
      req.flush([]);
    });
  });
});
