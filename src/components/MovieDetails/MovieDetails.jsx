import PropTypes from 'prop-types';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

import BackLink from 'components/BackLink/BackLink';
import css from './MovieDetails.module.css';
import Loader from 'components/Loader/Loader';

import noBannerImg from '../../images/no_actor_pic.png';

const MovieDetails = ({ movieInfo }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/'; // или ?? '/movies';

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <div className={css.wrapper}>
        <img
          src={
            movieInfo.poster_path
              ? `https://image.tmdb.org/t/p/w300/${movieInfo.poster_path}`
              : noBannerImg
          }
          alt={movieInfo.title}
          loading="lazy"
        />
        <div className={css.info_wrapper}>
          <h1 className={css.title}>
            {movieInfo.title} (
            {String(movieInfo.release_date || movieInfo.first_air_date).slice(
              0,
              4
            )}
            )
          </h1>
          <p className={css.text}>
            User score: {(movieInfo.vote_average * 10).toFixed(0)}%
          </p>
          <h2 className={css.title}>Overview:</h2>
          <p className={css.text}>{movieInfo.overview}</p>
          <h3 className={css.title}>Genres:</h3>
          <p className={css.text}>
            {movieInfo.genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </div>

      <div className={css.wrapper_additional}>
        <h3 className={css.title}>Additional information:</h3>
        <ul>
          <li className={css.item}>
            <Link
              className={css.item_link}
              to="cast"
              state={{ from: location.state.from }}
            >
              Cast
            </Link>
          </li>
          <li className={css.item}>
            <Link
              className={css.item_link}
              to="reviews"
              state={{ from: location.state.from }}
            >
              Reviews
            </Link>
          </li>
        </ul>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

MovieDetails.propTypes = {
  movieInfo: PropTypes.objectOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      first_air_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
    })
  ),
};

export default MovieDetails;
