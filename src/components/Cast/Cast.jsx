import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastActorsList } from 'api/fetchCastActorsList';
import { ActorsList } from 'components/ActorsList/ActorsList';

export const Cast = () => {
  const { id } = useParams();
  console.log('id', id);

  const [castActorsList, setCastActorsList] = useState(null);

  useEffect(() => {
    fetchCast();

    async function fetchCast() {
      try {
        const result = await fetchCastActorsList(id);
        // console.log('result', result);
        const castArr = result.data.cast;
        console.log('castArr', castArr);
        setCastActorsList(castArr);
      } catch (error) {
        console.log(error);
      }
    }
  }, [id]);

  //   console.log('castActorsList', castActorsList);

  return castActorsList && castActorsList.length > 0 ? (
    <ActorsList actorsListArr={castActorsList} />
  ) : (
    <p>There is no cast for this movie...</p>
  );
};
