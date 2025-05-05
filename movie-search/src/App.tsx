import './App.css';
import Search from './search/Search.tsx';
import Mode from './mode/Mode.tsx';

//TODO modify css in search for form switch
function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
        <div className="p-4">
          <Mode />
        </div>
        <Search />
      </div>
    </>
  );
}

export default App;
