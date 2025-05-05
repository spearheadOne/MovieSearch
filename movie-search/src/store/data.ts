export interface MovieRequest {
  Id?: string;
  Title?: string;
  Year?: number;
  Plot?: string;
}

export interface MovieResponse {
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
  DVD?: string | null;
  BoxOffice?: string;
  Production?: string | null;
  Website?: string | null;
  Response?: boolean;
}