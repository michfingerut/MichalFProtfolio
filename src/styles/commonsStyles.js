// External modules
import styled, { css } from 'styled-components';

// Internal modules
import { theme } from './theme';

export const borders = css`
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const BaseContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 40px;

  h1 {
    width: 80%;
    text-align: left;
  }

  p {
    font-size: ${theme.fontSize};
  }
`;

export const BaseCardContainer = styled.div`
  width: 80%;
  gap: 20px;
  padding: 20px;
  margin-bottom: 30px;
  ${borders}
`;

export const DownloadButton = styled.button`
  background-color: ${theme.buttonColor};
  color: white;
  border: none;
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    background-color 0.3s ease,
    transform 0s ease;
  font-weight: bold;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const GoUpButtonStyle = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  color: ${theme.secondaryText};
  border: none;
  padding: 12px 16px;
  cursor: pointer;
  z-index: 10;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};

  &:hover {
    transform: scale(1.5);
    color: ${theme.primaryText};
  }
`;
