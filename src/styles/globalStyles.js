// External modules
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    transition: background-color ${({ theme }) => theme.transition},
                color ${({ theme }) => theme.transition},
                border ${({ theme }) => theme.transition};
    scrollbar-width: thin;
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
  
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px; 
  }
  
  ::-webkit-scrollbar-track {
    background: ${({ theme }) =>
      theme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
    border-radius: 3px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.buttonColor};
    border-radius: 3px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.hoverColor};
  }
  
  /* For Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) =>
      `${theme.buttonColor} ${
        theme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'
      }`};
  }
`;
