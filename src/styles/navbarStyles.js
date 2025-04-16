// External modules
import styled from 'styled-components';

// Internal modules
import { theme } from './theme';

export const NavContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${theme.secondaryBackgroundColor};
  padding: 15px 30px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
