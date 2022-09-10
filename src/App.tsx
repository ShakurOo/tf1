import { ApolloProvider } from '@apollo/client';
import React from 'react';

import { client } from './apollo';
import { SlideShow } from './components/SlideShow';
import { GlobalStyle, Wrapper } from './styles';

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Wrapper>
      <SlideShow />
    </Wrapper>
  </ApolloProvider>
);

export default App;
