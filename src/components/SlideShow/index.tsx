import React, { useEffect } from 'react';

import { useGetProgramsQuery } from '../../graphql';

export const SlideShow = () => {
  const { data, error, loading } = useGetProgramsQuery();

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  useEffect(() => {
    console.log('loading ...', loading);
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
