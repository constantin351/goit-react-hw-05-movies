import PropTypes from 'prop-types';
import MoviesItem from 'components/MoviesItem/MoviesItem';
import css from './MoviesList.module.css';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <main>
      
      {location.pathname === '/' && (
        <h1 className={css.title}>Trending today</h1>
      )}

      <ul>
        {movies.map(movie => (
          <MoviesItem key={movie.id} id={movie.id} name={movie.title} />
        ))}
      </ul>
      
    </main>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
