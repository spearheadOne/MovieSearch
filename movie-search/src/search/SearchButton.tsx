import { useMovieStore } from '../store/movieStore.ts';
import { MovieRequest } from '../../../data/data.ts';

interface SearchButtonProps {
  movieInput: MovieRequest,
  fetch: ()=> void | Promise<void>,
}


function SearchButton({movieInput, fetch}: SearchButtonProps) {

  const setMovieRequest = useMovieStore((state) => state.setMovieRequest);
  const clearMovieRequest = useMovieStore((state) => state.clearMovieRequest)

  const handleClear = () => {
    clearMovieRequest();
  }

  const handleSearch = async () => {
      setMovieRequest(movieInput);
      await fetch();
  }

  return (
    <div className="mt-6 flex items-center justify-start gap-x-4">
      <button
        type="button"
        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleClear}
      >
        Clear
      </button>
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchButton;
