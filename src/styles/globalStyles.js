// External modules
import { createGlobalStyle } from 'styled-components';

// Internal modules
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;

    background-color: ${theme.secondaryBackgroundColor};
  }

  p, ul, li {
    color: ${theme.secondaryText};
  }

  h1 {
    color: ${theme.primaryText};
  }
`;
