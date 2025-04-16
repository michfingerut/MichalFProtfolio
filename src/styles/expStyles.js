// External modules
import styled from 'styled-components';

// Internal modules
import { BaseContainer, BaseCardContainer } from './commonsStyles';

export const ExpContainer = styled(BaseContainer)`
  background-color: ${({ theme }) => theme.primaryBackgroundColor};
`;

export const ExpCardContainer = styled(BaseCardContainer)`
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  line-height: 1.6;
`;
