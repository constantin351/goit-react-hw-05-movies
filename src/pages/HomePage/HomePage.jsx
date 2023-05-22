import { useState, useEffect } from 'react';
import { fetchDayTrendingMovies } from 'api/fetchDayTrendingMovies';

import { MoviesList } from 'components/MoviesList/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();

    async function fetchMovies() {
      try {
        const result = await fetchDayTrendingMovies();
        const moviesArr = result.data.results;
        setMovies(moviesArr);
      } catch (error) {
        // setError(error);
        console.log('error', error);
      }
    }
  }, []);

  // console.log('movies', movies);

  return <>{movies && <MoviesList movies={movies} />}</>;
};

export default HomePage;
