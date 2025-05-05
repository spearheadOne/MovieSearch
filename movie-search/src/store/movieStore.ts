import { create } from 'zustand/react';
import api from '../lib/axios.ts';
import { MovieRequest, MovieResponse } from './data.ts';

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

export const useMovieStore = create<MovieStore>((set) => ({
  movieResponse: null,
  movieRequest: null,
  error: null,

  setMovieRequest: (movie) => set({movieRequest: movie}),
  clearMovieRequest: () => set({ movieRequest: null }),
  clearMovieResponse: () => set ({movieResponse: null}),
  fetchMovieByTitle: async () => {
    const movie = get().movieRequest
    set({ error: null });

    try {
      const res = await api.get('/api/searchByTitle', {
        params: {
          title: movie?.Title || '',
          year: movie?.Year || '',
          plot: movie?.Plot || 'short',
        },
      });

      if (res.data?.Search) {
        set({ movieResponse : res.data.Search });
      } else {
        set({ movieResponse: null, error: res.data?.error || 'No movies found' });
      }
    } catch (err: any) {
      set({ error: err.message || 'Failed to fetch movies' });
    }
  },
  fetchMovieById: async () => {
    const movie = get().movieRequest
    set({ error: null });

    try {
      const res = await api.get('/api/searchById', {
        params: {
          id: movie?.id || '',
          year: movie?.Year || '',
          plot: movie?.Plot || 'short',
        },
      });

      if (res.data?.Search) {
        set({ movieResponse: res.data.Search });
      } else {
        set({ movieResponse: null, error: res.data?.error || 'No movies found' });
      }
    } catch (err: any) {
      set({ error: err.message || 'Failed to fetch movies' });
    }
  },
}));
