// External modules
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryBackgroundColor};
  padding-top: 20px;
  width: 100%;
`;

export const FooterIconContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 14px;
  text-align: center;
`;

export const FooterLink = styled.a`
  display: inline-block;
  text-decoration: none;

  svg {
    color: ${({ theme }) => theme.secondaryText};
    font-size: 30px;
    transition:
      color 0.3s ease,
      transform 0.3s ease;
  }

  &:hover svg {
    color: ${({ theme }) => theme.primaryText};
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
