import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import React from 'react';

import { SlideShow } from './components/SlideShow';
import { GlobalStyle, Wrapper } from './styles';

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

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Wrapper>
      <SlideShow />
    </Wrapper>
  </ApolloProvider>
);

export default App;
