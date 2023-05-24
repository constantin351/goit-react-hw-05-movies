import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieReviews from 'api/fetchMovieReviews';
import ReviewsList from 'components/ReviewsList/ReviewsList';
import css from "./Reviews.module.css"

const Reviews = () => {
  const { id } = useParams();
  const [reviewsList, setReviewsList] = useState(null);

  useEffect(() => {
    fetchReviews();

    async function fetchReviews() {
      try {
        const result = await fetchMovieReviews(id);
        const reviewsArr = result.data.results;
        setReviewsList(reviewsArr);
      } catch (error) {
        console.log(error);
      }
    }
  }, [id]);

  return reviewsList && reviewsList.length > 0 ? (
    <ReviewsList reviews={reviewsList} />
  ) : (
    <p className={css.no_reviews_list}>
      There are no reviews for this movie yet...
    </p>
  );
};

export default Reviews;
