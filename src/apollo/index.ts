import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// APOLLO CONFIG
const API_ENDPOINT = 'https://tf1-interview.hasura.app/v1/graphql';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      console.error(`Graphql error: ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: API_ENDPOINT })]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
