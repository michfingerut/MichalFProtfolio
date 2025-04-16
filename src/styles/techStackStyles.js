// External modules
import styled from 'styled-components';

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TechItem = styled.span`
  background-color: ${({ theme }) => theme.buttonColor};
  color: white;
  font-size: ${({ theme }) => theme.fontSize};
  padding: 5px 10px;
  border-radius: 20px;
`;
