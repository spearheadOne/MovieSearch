import './Search.css';
import { useState } from 'react';
import SearchByTitle from './SearchByTitle.tsx';
import SearchByImdb from './SearchByImdb.tsx';

function Search() {

  const [mode, setMode] = useState<'title' | 'imdb'>('title');


  return (
    <>
      <div className="max-w-2xl ml-4 mt-6">
        <div className="border border-gray-300 rounded-2xl shadow-md p-6 space-y-6 bg-white min-h-[900px]">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Search movie</h1>
          <div className="flex justify-start">
            <div className="inline-flex items-center bg-gray-200 rounded-full p-1">
              <button
                onClick={() => setMode('title')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  mode === 'title'
                    ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                Search by title
              </button>
              <button
                onClick={() => setMode('imdb')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  mode === 'imdb'
                    ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                Search by IMDB Id
              </button>
            </div>
          </div>
          {mode === 'title' ? <SearchByTitle /> : <SearchByImdb />}
        </div>
      </div>
    </>
  );
}

export default Search;