import Plot from './Plot.tsx';
import SearchButton from './SearchButton.tsx';
import { useState } from 'react';
import { useMovieStore } from '../store/movieStore.ts';

function SearchByImdb() {
  const [id, setId] = useState('');
  const [plot, setPlot] = useState('short');

  const fetchMovieById = useMovieStore((state) => state.fetchMovieById);

  const clearInput = () => {
    setId('');
    setPlot('short');
  };

  return (
    <div className="space-y-8">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        Search by IMDB Id
      </h1>
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="imdbId"
            className="block text-sm font-medium text-gray-900 dark:text-gray-200"
          >
            IMDB Id
          </label>
          <input
            type="text"
            name="imdbId"
            id="imdbId"
            className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
      </div>
      <Plot value={plot} onChange={setPlot} />
      <SearchButton
        movieInput={{ Id: id, Plot: plot }}
        fetch={fetchMovieById}
        clear={clearInput}
      />
    </div>
  );
}

export default SearchByImdb;
