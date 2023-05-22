import { Route, Routes, NavLink } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
// import styled from 'styled-components';
import css from './App.module.css';

// import { MoviesList } from './MoviesList/MoviesList';
// import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
// import { MoviesItem } from './MoviesItem/MoviesItem';

// const StyledNavLink = styled(NavLink)`
//   padding: 8px 16px;
//   border-radius: 4px;
//   text-decoration: none;
//   color: black;
//   font-weight: 500;

//   &.active {
//     background-color: orangered;
//   }
// `;

export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
    <>
      <header className={css.header}>
        <nav>
          <NavLink
            className={css.navlink}
            to="/"
            // end
          >
            Home
          </NavLink>
          <NavLink className={css.navlink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="movies/:id" element={<MoviesList />} />
          </Route> */}
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="/movies" element={<MoviesPage />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};
