import './App.css';

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
// import logo from './logo.svg';

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
    <div className="App">
      <SlideShow />
    </div>
  </ApolloProvider>
);

export default App;
