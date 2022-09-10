import { gql } from '@apollo/client';

export const GET_PROGRAMS = gql`
  query GetPrograms($limit: Int, $offset: Int) {
    program(limit: $limit, offset: $offset) {
      id
      name
      thumnail {
        alt
        id
        url
      }
    }
  }
`;
