import { create } from 'zustand/react';
import api from '../lib/axios.ts';

interface Movie {
  Id: string;
  Title: string;
  Year: number;
  Plot: string;
}

//TODO add more methods
interface MovieStore {
  movies: Movie[];
  addMovie: (movie: Movie) => void;
  clearMovies: () => void;
  error: string | null;
  fetchMovies: (query: string) => Promise<void>;
}

export const useMovieStore = create<MovieStore>((set) => ({
  movies: [],
  error: null,
  addMovie: (movie) => set((state) => ({ movies: [...state.movies, movie] })),
  clearMovies: () => set({ movies: [] }),
  fetchMovies: async (query: string) => {
    set({ error: null });

    try {
      const res = await api.get('/search', { params: query });

      if (res.data?.Search) {
        set({ movies: res.data.Search });
      } else {
        set({ movies: [], error: res.data?.error || 'No movies found' });
      }
    } catch (err: any) {
      set({ error: err.message || 'Failed to fetch movies' });
    }
  },
}));
