// External modules
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    transition: background-color ${({ theme }) => theme.transition},
                color ${({ theme }) => theme.transition},
                border ${({ theme }) => theme.transition};
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;

    background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  }

  p, ul, li {
    color: ${({ theme }) => theme.secondaryText};
  }

  h1 {
    color: ${({ theme }) => theme.primaryText};
  }
`;
