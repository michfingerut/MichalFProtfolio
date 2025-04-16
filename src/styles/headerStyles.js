// External modules
import styled from 'styled-components';

// Internal modules
import { theme } from './theme';
import backgroundImage from '../assets/background.jpeg';
import { borders } from './commonsStyles';

export const HeaderContainer = styled.div`
  display: grid;
  place-items: center;
  height: ${theme.pageHeight};
  text-align: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: ${theme.primaryText};

  h1 {
    font-size: 2.5em;
  }
  p {
    font-size: 1.1em;
  }
`;

export const SecondaryContainer = styled.div`
  background-color: ${theme.secondaryBackgroundColor};
  padding: 20px;
  ${borders}
  border: 1px solid ${theme.borderColor};
`;
