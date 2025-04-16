// External modules
import styled from 'styled-components';

export const ContactInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize};
  color: ${({ theme }) => theme.secondaryText};
  text-align: center;
  margin-bottom: 20px;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
`;
