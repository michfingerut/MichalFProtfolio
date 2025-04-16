// External modules
import styled from 'styled-components';

// Internal modules
import darkBackgroundImage from '../assets/background.jpeg';
import lightBackgroundImage from '../assets/laptop-with-notepad-beige-background.jpg';
import { borders } from './commonsStyles';

export const HeaderContainer = styled.div`
  display: grid;
  place-items: center;
  height: ${({ theme }) => theme.pageHeight};
  text-align: center;
  background-image: url(${({ theme }) =>
    theme.isDark
      ? darkBackgroundImage
      : lightBackgroundImage}); /* Conditional background */

  background-size: cover;
  background-position: center;
  color: ${({ theme }) => theme.primaryText};

  h1 {
    font-size: 2.5em;
  }
  p {
    font-size: 1.1em;
  }
`;

export const SecondaryContainer = styled.div`
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  padding: 20px;
  ${borders}
  border: 1px solid ${({ theme }) => theme.borderColor};
`;
