import noActorImg from '../../images/no_actor_pic.png';
import css from "./ActorsList.module.css"

export const ActorsList = ({ actorsListArr }) => {
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
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
