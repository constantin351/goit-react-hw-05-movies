import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieDetailsWithID from 'api/fetchMovieDetailsWithID';
import MovieDetails from 'components/MovieDetails/MovieDetails';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchMovieDetails();

    // if (id) {
    //   fetchMovieDetails();
    // }

    async function fetchMovieDetails() {
      try {
        const result = await fetchMovieDetailsWithID(id);
        const movieDetailsObj = result.data;
        setMovieDetails(movieDetailsObj);
      } catch (error) {
        console.log(error);
      }
    }
  }, [id]);

  return (
    <>
      {movieDetails && <MovieDetails movieInfo={movieDetails} />}
    </>
  );
};

export default MovieDetailsPage;
