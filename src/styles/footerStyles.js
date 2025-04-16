// External modules
import styled from 'styled-components';

// Internal modules
import { theme } from './theme';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.secondaryBackgroundColor};
  padding-top: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

export const FooterIconContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`;

export const FooterText = styled.p`
  color: ${theme.secondaryText};
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
`;

export const FooterLink = styled.a`
  display: inline-block;
  text-decoration: none;

  svg {
    color: ${theme.secondaryText};
    font-size: 30px;
    transition:
      color 0.3s ease,
      transform 0.3s ease;
  }

  &:hover svg {
    color: ${theme.primaryText};
    transform: scale(1.15);
  }

  /* Override Material UI IconButton styling */
  .MuiIconButton-root {
    color: inherit;
    padding: 8px;

    &:hover {
      background-color: transparent;
    }
  }
`;
