import {create} from "zustand/react";

//TODO add more fields
interface Movie {
  Title: string
}


//TODO add more methods
interface MovieStore {
    movies: Movie[];
    addMovie: (movie: Movie) => void;
    clearMovies: ()=> void;
}

export const useMovieStore = create<MovieStore>((set) => ({
    movies:[],
    addMovie: (movie) =>
        set((state) => ({ movies: [...state.movies, movie] })),
    clearMovies: () => set({ movies: [] }),
}));