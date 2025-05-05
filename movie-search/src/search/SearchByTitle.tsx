import Plot from './Plot.tsx';
import SearchButton from './SearchButton.tsx';

function SearchByTitle() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        Search by Title
      </h1>

      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-900 dark:text-gray-200"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="year"
            className="block text-sm font-medium text-gray-900 dark:text-gray-200"
          >
            Year
          </label>
          <input
            type="number"
            name="year"
            id="year"
            className="spinner-hidden mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
      </div>

      <Plot />
      <SearchButton />
    </div>
  );
}

export default SearchByTitle;
