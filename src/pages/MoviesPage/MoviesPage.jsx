import { useState } from 'react';
// import { fetchMoviesWithQuery } from 'api/fetchMoviesWithQuery';
// import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
//
import SearchBar from 'components/SearchBar/SearchBar';

const MoviesPage = () => {
  const [moviesFound, setMoviesFound] = useState(null);
  // const [error, setError] = useState(null);

  // const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('query');
  // //
  // useEffect(() => {
  //   if (query === '' || query === null) return;
  //   // if (query) fetchMovies();
  //   fetchMovies();

  //   async function fetchMovies() {
  //     try {
  //       const result = await fetchMoviesWithQuery(query);
  //       const moviesArr = result.data.results;
  //       console.log('moviesArr', moviesArr);
  //       setMoviesFound(moviesArr);
  //     } catch (error) {
  //       // setError(error);
  //       console.log('error', error);
  //     }
  //   }
  // }, [query]);

  // console.log('query', query);

  // console.log('moviesFound', moviesFound);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   setSearchParams({ query: form.elements.query.value });
  //   // setMoviesFound([]);

  //   form.reset();
  // };
  //
  const onSubmitHandler = moviesArr => {
    setMoviesFound(moviesArr);
  };
  //
  return (
    <>
      <SearchBar onSubmitHandler={onSubmitHandler} />

      {/* <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form> */}

      {moviesFound && <MoviesList movies={moviesFound} />}
    </>
  );
};

export default MoviesPage;
