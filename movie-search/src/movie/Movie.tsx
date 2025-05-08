import { useMovieStore } from '../store/movieStore.ts';
import {ResponseFields } from '../../../data/data.ts';
import React from 'react';

function Movie() {
  const movieResponse = useMovieStore((state) => state.movieResponse);

  return (
    <div className="mt-6 flex-grow">
      <div className="min-h-[900px] space-y-6 rounded-2xl border border-gray-300 bg-white p-6 shadow-md dark:border-gray-600 dark:bg-gray-900">
        <h1 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
          Movie
        </h1>

        {movieResponse ? (
          movieResponse.Response === 'True' ? (
            <dl className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {ResponseFields.map(({ key, label}) => {
                const value = movieResponse?.[key];
                if (!value) return null;

                return (
                  <React.Fragment key={key}>
                    <dt className="font-semibold">{label}</dt>
                    <dd>
                      {key === 'Website' ? (
                        <a
                          href={value as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          {value as React.ReactNode}
                        </a>
                      ) : key==='Poster' ? (
                        <img
                          src={movieResponse?.Poster}
                          alt={movieResponse?.Title ?? ''}
                          className="max-w-xs rounded-md border"
                        />
                      ) : (
                        value as React.ReactNode
                      )}
                    </dd>
                  </React.Fragment>
                );
              })}

              {movieResponse?.Ratings && movieResponse.Ratings.length > 0 && (
                <>
                  <dt className="font-semibold">Ratings</dt>
                  <dd>
                    <ul className="list-inside list-disc">
                      {movieResponse.Ratings.map((rating, i) => (
                        <li key={i}>
                          {rating.Source}: {rating.Value}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </>
              )}
            </dl>
          ) : (
            <p>{movieResponse.Error || 'Unknown Error'}</p>
          )
        ) : (
          <p>Find a movie by Title or by IMDB ID</p>
        )}
      </div>
    </div>
  );
}

export default Movie;
