import styled from 'styled-components';

import { theme } from './theme';
import { BaseContainer, BaseCardContainer } from './commonsStyles';

export const ExpContainer = styled(BaseContainer)`
  background-color: ${theme.primaryBackgroundColor};
`;

export const ExpCardContainer = styled(BaseCardContainer)`
  background-color: ${theme.secondaryBackgroundColor};
  line-height: 1.6;
  font-size: ${theme.fontSize};
`;
