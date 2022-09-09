import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';

import { FETCH_PROGRAMS } from '../../Apollo/Queries';

export const SlideShow = () => {
  const { data, error, loading } = useQuery(FETCH_PROGRAMS);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    console.log(data);
  }, [error]);

  useEffect(() => {
    console.log(data);
  }, [loading]);

  return (
    <div>
      {data?.program?.length && (
        <ul>
          {data.program.map(({ id }) => (
            <li key={id}>{id}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
