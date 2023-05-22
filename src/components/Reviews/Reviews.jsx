import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api/fetchMovieReviews';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

export const Reviews = () => {
  const { id } = useParams();
  const [reviewsList, setReviewsList] = useState(null);

  useEffect(() => {
    fetchReviews();

    async function fetchReviews() {
      try {
        const result = await fetchMovieReviews(id);
        const reviewsArr = result.data.results;
        console.log('reviewsArr', reviewsArr);
        setReviewsList(reviewsArr);
      } catch (error) {
        console.log(error);
      }
    }
  }, [id]);

  return reviewsList && reviewsList.length > 0 ? (
    <ReviewsList reviews={reviewsList} />
  ) : (
    <p>There are no reviews for this movie yet...</p>
  );
};
