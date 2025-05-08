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

export const FilterHeader = styled.h2`
  color: ${({ theme }) => theme.primaryText};
  font-size: 1.4rem;
`;

export const FilterLabel = styled.label`
  color: ${({ theme }) => theme.secondaryText};
  margin-right: 0.75rem;
`;

export const SearchInput = styled.input`
  padding: 0.6rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.primaryBackgroundColor};
  color: ${({ theme }) => theme.primaryText};
  font-size: 1rem;
  width: 100%;
  max-width: 20%;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.buttonColor};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.buttonColor}40`};
  }
`;

export const ResultsContainer = styled.div`
  height: 200px;
  overflow-y: auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.primaryBackgroundColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 0.5rem;
`;

export const ResultItem = styled.div`
  padding: 0.5rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => `${theme.buttonColor}15`};
  color: ${({ theme }) => theme.primaryText};
  border-left: 2px solid ${({ theme }) => theme.buttonColor};
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => `${theme.buttonColor}30`};
    transform: translateX(2px);
  }
`;
