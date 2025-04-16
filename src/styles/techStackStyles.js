// External modules
import styled from 'styled-components';

// Internal modules
import { theme } from './theme';

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TechItem = styled.span`
  background-color: ${theme.buttonColor};
  color: white;
  font-size: ${theme.fontSize};
  padding: 5px 10px;
  border-radius: 20px;
`;

export const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
