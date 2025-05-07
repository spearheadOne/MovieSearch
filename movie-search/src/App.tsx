import './App.css';
import Search from './search/Search.tsx';
import Mode from './mode/Mode.tsx';
import Movie from './movie/Movie.tsx';

//TODO modify css in search for form switch
function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
        <div className="p-4">
          <Mode />
        </div>
        <div className="flex flex-row gap-4 px-4">
          <Search />
          <Movie />
        </div>
      </div>
    </>
  );
}

export default App;
