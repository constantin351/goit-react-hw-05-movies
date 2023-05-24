import PropTypes from 'prop-types';
import noActorImg from '../../images/no_actor_pic.png';
import css from './ActorsList.module.css';

const ActorsList = ({ actorsListArr }) => {
  return (
    <div>
      <ul className={css.actorsList}>
        {actorsListArr.map(actor => (
          <li key={actor.id} className={css.actorsList_item}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                  : noActorImg
              }
              alt={actor.name}
              loading="lazy"
              className={css.actorsList_img}
            />
            <h3 className={css.actorsList_title}>{actor.name}</h3>
            <p className={css.actorsList_text}>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

ActorsList.propTypes = {
  actorsListArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};

export default ActorsList;
