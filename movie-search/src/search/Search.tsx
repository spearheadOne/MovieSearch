import { useState } from 'react';
import SearchByTitle from './SearchByTitle.tsx';
import SearchByImdb from './SearchByImdb.tsx';

function Search() {
  const [mode, setMode] = useState<'title' | 'imdb'>('title');

  return (
    <div className="mt-6 w-full max-w-2xl">
      <div className="min-h-[900px] space-y-6 rounded-2xl border border-gray-300 bg-white p-6 shadow-md dark:border-gray-600 dark:bg-gray-900">
        <h1 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
          Search movie
        </h1>
        <div className="flex justify-start">
          <div className="inline-flex items-center rounded-full bg-gray-100 p-1 dark:bg-gray-700">
            <button
              onClick={() => setMode('title')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                mode === 'title'
                  ? 'bg-blue-600 text-white dark:bg-blue-500'
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-white'
              }`}
            >
              Search by title
            </button>
            <button
              onClick={() => setMode('imdb')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                mode === 'imdb'
                  ? 'bg-blue-600 text-white dark:bg-blue-500'
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-white'
              }`}
            >
              Search by IMDB Id
            </button>
          </div>
        </div>
        {mode === 'title' ? <SearchByTitle /> : <SearchByImdb />}
      </div>
    </div>
  );
}

export default Search;
