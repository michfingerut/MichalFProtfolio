// External modules
import styled from 'styled-components';

export const NavContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  padding: 15px 30px;
  position: sticky;
  z-index: 1000;
  color: ${({ theme }) => theme.primaryText};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.primaryText};
  cursor: pointer;
  margin-left: auto;
  padding: 0;
  font-size: 24px;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.hoverColor};
  }
`;

export const Tooltip = styled.div`
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.3s ease,
    visibility 0s 0.3s;
  position: absolute;
  bottom: -3em;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.primaryText};
  color: ${({ theme }) => theme.secondaryBackgroundColor};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;

  ${ToggleButton}:hover & {
    visibility: visible;
    opacity: 1;
    transition:
      opacity 0.3s ease,
      visibility 0s;
  }
`;
