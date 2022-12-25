import './App.css';
import { MovieProvider } from './MovieContext';
import MovieList from './MovieList';
import Nav from './Nav';

function App() {

  // WE COULD HAVE LIFTED UP THE STATE FROM MOVIELIST HERE, BUT IT IS A DIRTY SOLUTION

  return (
    <MovieProvider>
      <main className='container'>
        <Nav />
        <MovieList />
      </main>
    </MovieProvider>
  );
}

export default App;
