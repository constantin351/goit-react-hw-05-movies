import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import fetchMoviesWithQuery from 'api/fetchMoviesWithQuery';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmitHandler }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  //
  
  useEffect(() => {
    if (query === '' || query === null) return;
    // if (query) fetchMovies();
    fetchMovies();

    async function fetchMovies() {
      try {
        const result = await fetchMoviesWithQuery(query);
        const moviesArr = result.data.results;
        // setMoviesFound(moviesArr);
        onSubmitHandler(moviesArr);
      } catch (error) {
        // setError(error);
        console.log(error);
      }
    }
  }, [onSubmitHandler, query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    // setMoviesFound([]);
    form.reset();
  };

  return (
    <div className={css.Searchbar}>
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <input
          type="text"
          name="query"
          className={css.SearchForm_input}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit" className={css.SearchForm_button}>
          <FiSearch size={28} />
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};

export default SearchBar;
