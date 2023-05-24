import { useState, useEffect } from 'react';
import fetchDayTrendingMovies from 'api/fetchDayTrendingMovies';
import MoviesList from 'components/MoviesList/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();

    async function fetchMovies() {
      try {
        const result = await fetchDayTrendingMovies();
        const moviesArr = result.data.results;
        setMovies(moviesArr);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return <>{movies && <MoviesList movies={movies} />}</>;
};

export default HomePage;
