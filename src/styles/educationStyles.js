// External modules
import styled from 'styled-components';

// Internal modules
import { theme } from './theme';
import { borders, BaseContainer, BaseCardContainer } from './commonsStyles';

export const EducationContainer = styled(BaseContainer)`
  background-color: ${theme.secondaryBackgroundColor};
`;

export const EducationCardContainer = styled(BaseCardContainer)`
  background-color: ${theme.primaryBackgroundColor};
  ${borders}

  h2 {
    color: ${theme.primaryText};
    font-size: 1.7rem;
  }
`;

export const TechStackWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
`;
