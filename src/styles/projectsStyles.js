// External modules
import styled from 'styled-components';

// Internal modules
import { theme } from './theme';

export const ProjectsContainer = styled.div`
  padding: 40px;
  min-height: ${theme.pageHeight};
  background-color: ${theme.secondaryBackgroundColor};
`;

export const ProjectCardContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.primaryBackgroundColor};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
  width: 80%;
`;

export const ProjectContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProjectTitle = styled.h2`
  color: ${theme.primaryText};
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const ProjectDescription = styled.p`
  color: ${theme.secondaryText};
  font-size: 1.1rem;
  margin-bottom: 15px;
  line-height: 1.6;
`;

export const ProjectImage = styled.img`
  width: 50%;
  height: 70%;
  object-fit: cover;
  border-radius: 10px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
`;
