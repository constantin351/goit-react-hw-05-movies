import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

// import HomePage from 'pages/HomePage/HomePage';
const HomePage = lazy(() => import('pages/HomePage'));
// import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
// import MoviesPage from 'pages/MoviesPage/MoviesPage';
const MoviesPage = lazy(() => import('pages/MoviesPage'));
// import Cast from '../Cast/Cast';
const Cast = lazy(() => import('../Cast/Cast'));
// import Reviews from '../Reviews/Reviews';
const Reviews = lazy(() => import('../Reviews/Reviews'));


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        
        <Route index element={<HomePage />} />

        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="/movies" element={<MoviesPage />} />

        <Route path="*" element={<HomePage />} />
        
      </Route>
    </Routes>
  );
};

export default App;
