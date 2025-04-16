// External modules
import styled from 'styled-components';

// Internal modules
import { BaseContainer, BaseCardContainer } from './commonsStyles';

export const EducationContainer = styled(BaseContainer)`
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
`;

export const EducationCardContainer = styled(BaseCardContainer)`
  background-color: ${({ theme }) => theme.primaryBackgroundColor};

  h2 {
    color: ${({ theme }) => theme.primaryText};
    font-size: 1.3rem;
  }
`;

export const TechStackWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
`;
