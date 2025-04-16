// External modules
import styled from 'styled-components';

export const NavContainer = styled.div`
  //position:fixed; //if i want it to apear allways
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
