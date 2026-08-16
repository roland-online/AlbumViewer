export interface Album {
  Id: number;
  ArtistId: number;
  Title: string;
  Description: string;
  Year: number;
  ImageUrl: string;
  AmazonUrl: string;
  SpotifyUrl: string;
  Artist: Artist;
  Tracks: Track[];
}

export interface Artist {
  Id: number;
  ArtistName: string;
  Description: string;
  ImageUrl: string;
  AmazonUrl: string;
  AlbumCount: number;
  Albums: Album[];
}

export interface ArtistResult {
  Artist: Artist;
  Albums: Album[];
}

export interface ArtistLookupItem {
  id: string;
  name: string;
}

export interface Track {
  Id: number;
  AlbumId: number;
  SongName: string;
  Length: string;
  Bytes: number;
  UnitPrice: number;
}

export interface ApplicationStats {
  OsPlatform: string;
  AngularVersion: string;
  AspDotnetVersion: string;
  DataMode: string;
}

export interface TokenInfo {
  token: string;
  expires: string;
  displayName: string;
}

