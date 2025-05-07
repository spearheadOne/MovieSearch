import { create } from 'zustand/react';
import api from '../lib/axios.ts';
import { MovieRequest, MovieResponse } from '../../../data/data.ts';

interface MovieStore {
  movieResponse: Partial<MovieResponse> | null;
  movieRequest: Partial<MovieRequest> | null;
  error: string | null;

  setMovieRequest: (movie: Partial<MovieRequest>) => void;
  clearMovieRequest: () => void;
  clearMovieResponse: () => void;
  fetchMovieByTitle: () => Promise<void>;
  fetchMovieById: () => Promise<void>;
}

export const useMovieStore = create<MovieStore>((set, get) => {

  const fetchMovie = async (endpoint: string) => {
    const movie = get().movieRequest;
    set({ error: null });

    try {
      const res = await api.post<MovieResponse>(endpoint, movie);

      if (res.data?.Response === 'True') {
        set({ movieResponse: res.data });
      } else {
        set({ movieResponse: null, error: res.data?.Error || 'No movies found' });
      }
    } catch (err: any) {
      set({ error: err.message || 'Failed to fetch movies' });
    }
  };

  return {
    movieResponse: null,
    movieRequest: null,
    error: null,

    setMovieRequest: (movie) => set({ movieRequest: movie }),
    clearMovieRequest: () => set({ movieRequest: null }),
    clearMovieResponse: () => set({ movieResponse: null }),
    fetchMovieByTitle: () => fetchMovie('/searchByTitle'),
    fetchMovieById: () => fetchMovie('/searchById'),
  };
});
