import { useState, useEffect } from 'react';
// import { Route, Routes, Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchMovieDetailsWithID } from 'api/fetchMovieDetailsWithID';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';

const MovieDetailsPage = () => {
  const { id } = useParams();
  // console.log('id', id);

  const [movieDetails, setMovieDetails] = useState(null);
  // const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieDetails();

    // if (id) {
    //   fetchMovieDetails();
    // }

    async function fetchMovieDetails() {
      try {
        const result = await fetchMovieDetailsWithID(id);
        const movieDetailsObj = result.data;
        // console.log('movieDetailsObj', movieDetailsObj);
        setMovieDetails(movieDetailsObj);
      } catch (error) {
        // setError(error);
        console.log('error', error);
      }
    }
  }, [id]);
  // console.log('movieDetails', movieDetails);
  return (
    <>
      {movieDetails && <MovieDetails movieInfo={movieDetails} />}
      {/* <Routes>
        <Route></Route>
        <Route></Route>
      </Routes> */}

      {/* <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet /> */}
    </>
  );
};

export default MovieDetailsPage;
