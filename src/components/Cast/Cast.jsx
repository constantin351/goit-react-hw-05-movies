import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchCastActorsList from 'api/fetchCastActorsList';
import ActorsList from 'components/ActorsList/ActorsList';
import css from "./Cast.module.css"

const Cast = () => {
  const { id } = useParams();
  const [castActorsList, setCastActorsList] = useState(null);

  useEffect(() => {
    fetchCast();

    async function fetchCast() {
      try {
        const result = await fetchCastActorsList(id);
        const castArr = result.data.cast;
        setCastActorsList(castArr);
      } catch (error) {
        console.log(error);
      }
    }
  }, [id]);


  return castActorsList && castActorsList.length > 0 ? (
    <ActorsList actorsListArr={castActorsList} />
  ) : (
      <p className={css.no_cast_list}>There is no cast for this movie...</p>
  );
};

export default Cast;
