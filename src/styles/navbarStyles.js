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
    padding: 12px 10px;
    justify-content: space-between;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled.div`
  color: ${({ theme }) => theme.primaryText};
  margin: 0 25px 0 0;
  font-size: ${({ $isMobile }) => ($isMobile ? '16px' : '18px')};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: ${({ $isMobile }) => ($isMobile ? '1px' : '2px')};
  position: relative;
  padding: 5px 0;
  cursor: pointer;
  transition:
    color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.hoverColor};
    transform: scale(1.1);
  }
`;

export const LinkText = styled.span`
  white-space: nowrap;
  position: relative;
`;

export const LinkTooltip = styled.div`
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.3s ease,
    visibility 0s 0.3s;
  position: absolute;
  bottom: -2.5em;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.primaryText};
  color: ${({ theme }) => theme.secondaryBackgroundColor};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1001;

  ${LinkText}:hover & {
    visibility: visible;
    opacity: 1;
    transition:
      opacity 0.3s ease,
      visibility 0s;
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

  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: 10px;
  }

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

  @media (max-width: 768px) {
    font-size: 12px;
    bottom: -2.5em;
  }

  ${ToggleButton}:hover & {
    visibility: visible;
    opacity: 1;
    transition:
      opacity 0.3s ease,
      visibility 0s;
  }
`;
