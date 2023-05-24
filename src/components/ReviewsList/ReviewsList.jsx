import PropTypes from 'prop-types';
import css from './ReviewsList.module.css';

const ReviewsList = ({ reviews }) => {
  return (
    <div>
      <ul className={css.reviewsList}>
        {reviews.map(review => (
          <li key={review.id} className={css.reviewsList_item}>
            <h3 className={css.reviewsList_title}>{review.author}</h3>
            <p className={css.reviewsList_text}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default ReviewsList;
