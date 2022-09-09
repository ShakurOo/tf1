import { gql } from '@apollo/client';

export const FETCH_PROGRAMS = gql`
  query {
    program {
      id
    }
  }
`;
