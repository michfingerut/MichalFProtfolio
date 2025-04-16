import styled from 'styled-components';
import backgroundImage from '../assets/laptop-with-notepad-beige-background.jpg';
import { Link } from 'react-scroll';
import { theme } from './theme';
import { BaseContainer, borders } from './commonsStyles';

const AboutContainer = styled(BaseContainer)`
  background-color: ${theme.primaryBackgroundColor};
  min-height: ${theme.pageHeight};
  padding: 5em 0;

  @media (max-width: 1024px) {
    height: auto;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

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

const AboutSecondaryContainer = styled(SecondaryContainer)`
  width: 60%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 50px;
  justify-items: center;
  line-height: 1.6;

  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  span {
    display: block;
  }

  img {
    width: 200px;
    border-radius: 38px;
    @media (max-width: 768px) {
      width: 150px;
    }

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
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

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.secondaryBackgroundColor};
  padding-top: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

const FooterIconContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;

  & > a {
    color: ${theme.primaryText};
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.buttonColor};
    }
  }
`;

const FooterText = styled.p`
  color: ${theme.secondaryText};
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
`;

const FooterLink = styled.a`
  display: inline-block;
  text-decoration: none;
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

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechItem = styled.span`
  background-color: ${theme.buttonColor};
  color: white;
  font-size: 0.9rem;
  padding: 5px 10px;
  border-radius: 20px;
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

const ContactInfo = styled.p`
  font-size: 18px;
  color: ${theme.secondaryText};
  text-align: center;
  margin-bottom: 20px;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  justify-content: center;
  background-color: ${theme.primaryBackgroundColor};
`;

export {
  AboutContainer,
  HeaderContainer,
  AboutSecondaryContainer,
  NavStyle,
  NavContainer,
  FooterContainer,
  FooterIconContainer,
  FooterText,
  FooterLink,
  ProjectsContainer,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  TechItem,
  ContactInfo,
  ContactContainer,
};
