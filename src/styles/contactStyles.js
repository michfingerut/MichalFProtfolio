// External modules
import styled from 'styled-components';

// Internal modules
import { theme } from './theme';

export const ContactInfo = styled.p`
  font-size: ${theme.fontSize};
  color: ${theme.secondaryText};
  text-align: center;
  margin-bottom: 20px;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  justify-content: center;
  background-color: ${theme.secondaryBackgroundColor};
`;
