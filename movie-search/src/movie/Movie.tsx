import { useMovieStore } from '../store/movieStore.ts';

function Movie() {
  const movieResponse = useMovieStore((state) => state.movieResponse);

  console.log(movieResponse);
  return (
    <div className="mt-6 flex-grow">
      <div className="min-h-[900px] space-y-6 rounded-2xl border border-gray-300 bg-white p-6 shadow-md dark:border-gray-600 dark:bg-gray-900">
        <h1 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
          Movie
        </h1>

        {movieResponse ? (
          movieResponse.Response === 'True' ? (
            <>
              <p>{movieResponse.Title}</p>
            </>
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
