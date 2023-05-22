import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import css from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  return (
    <main>
      <h1 className={css.title}>Trending today</h1>
      <ul>
        {movies.map(movie => (
          // <li key={movie.id}>
          //   <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          // </li>
          <MoviesItem key={movie.id} id={movie.id} name={movie.title} />
        ))}
      </ul>
    </main>
  );
};
