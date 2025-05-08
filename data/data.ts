export interface MovieRequest {
  Id?: string;
  Title?: string;
  Year?: number;
  Plot?: string;
}

export interface MovieResponse {
  Response: 'True' | 'False';
  Error?: string;
  Title?: string;
  Year?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Poster?: string;
  Ratings?: Array<{ Source: string; Value: string }>;
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID?: string;
  Type?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
}

export const ResponseFields: { key: keyof MovieResponse; label: string; }[] = [
  { key: 'Title', label: 'Title' },
  { key: 'Year', label: 'Year' },
  { key: 'Rated', label: 'Rated' },
  { key: 'Released', label: 'Released' },
  { key: 'Runtime', label: 'Runtime' },
  { key: 'Genre', label: 'Genre' },
  { key: 'Director', label: 'Director' },
  { key: 'Writer', label: 'Writer' },
  { key: 'Actors', label: 'Actors' },
  { key: 'Plot', label: 'Plot' },
  { key: 'Language', label: 'Language' },
  { key: 'Country', label: 'Country' },
  { key: 'Awards', label: 'Awards' },
  { key: 'Poster', label: 'Poster'},
  { key: 'Metascore', label: 'Metascore' },
  { key: 'imdbRating', label: 'IMDb Rating' },
  { key: 'imdbVotes', label: 'IMDb Votes' },
  { key: 'imdbID', label: 'IMDb ID' },
  { key: 'Type', label: 'Type' },
  { key: 'DVD', label: 'DVD Release' },
  { key: 'BoxOffice', label: 'Box Office' },
  { key: 'Production', label: 'Production' },
  { key: 'Website', label: 'Website'}
];