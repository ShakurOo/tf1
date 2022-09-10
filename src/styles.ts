import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    color: #fff;
    height: 100%;
    width: 100%;
  }

  body {
    background-color: #1a1a1a;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Wrapper = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  padding: 36px;
  width: 100vw;
`;

export { GlobalStyle, Wrapper };
