import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MoviesItem.module.css';

const MoviesItem = ({ id, name }) => {
  const location = useLocation();

  return (
    <li key={id} className={css.item}>
      <Link
        className={css.item_link}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        {name}
      </Link>
    </li>
  );
};

MoviesItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default MoviesItem;
