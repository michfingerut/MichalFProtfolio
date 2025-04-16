// External modules
import styled from 'styled-components';

// Internal modules
import { theme } from './theme';
import { BaseContainer, BaseCardContainer } from './commonsStyles';

export const ProjectsContainer = styled(BaseContainer)`
  background-color: ${theme.primaryBackgroundColor};
`;

export const ProjectCardContainer = styled(BaseCardContainer)`
  background-color: ${theme.secondaryBackgroundColor};
  flex-direction: column;
`;

export const ProjectContentContainer = styled.div`
  padding: 20px;
`;

export const ProjectTitle = styled.h2`
  color: ${theme.primaryText};
  font-size: 1.5rem;
`;

export const ProjectDescription = styled.p`
  color: ${theme.secondaryText};
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
