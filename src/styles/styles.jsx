import styled from 'styled-components';
import backgroundImage from '../assets/laptop-with-notepad-beige-background.jpg';
import { theme } from './theme';
import { BaseContainer, borders } from './commonsStyles';

const HeaderContainer = styled.div`
  display: grid;
  place-items: center;
  height: ${theme.pageHeight};
  text-align: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: ${theme.primaryText};

  h1 {
    font-size: 2.5em;
  }
  p {
    font-size: 1.5em;
  }
`;

const NavContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${theme.secondaryBackgroundColor};
  padding: 15px 30px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
  min-height: ${theme.pageHeight};
  background-color: ${theme.secondaryBackgroundColor};
  flex-direction: column;
  align-items: center;
`;

const ProjectCard = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.primaryBackgroundColor};
  ${borders}
  padding: 20px;
  flex-direction: column;
  gap: 20px;
`;

const ProjectContent = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectTitle = styled.h2`
  color: ${theme.primaryText};
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: ${theme.secondaryText};
  font-size: 1.1rem;
  margin-bottom: 15px;
  line-height: 1.6;
`;

const ProjectImage = styled.img`
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

export {
  HeaderContainer,
  NavStyle,
  NavContainer,
  ProjectsContainer,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
};
