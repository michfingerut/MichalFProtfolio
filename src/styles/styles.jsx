import styled, { createGlobalStyle, css } from 'styled-components';
import backgroundImage from '../assets/laptop-with-notepad-beige-background.jpg';
import { Link } from 'react-scroll';

const primaryBackgroundColor = '#f5f5f5';
const secondaryBackgroundColor = 'rgba(255, 255, 255, 0.8)';
const primaryText = '#333333';
const secondaryText = '#777777';
const buttonColor = '#d46a34';
const hoverColor = '#f1c40f';
const ctaColor = '#6db98e';
const borderColor = '#e0e0e0';

const pageHeight = '100vh';

const borders = css`
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  p , ul, li{
    color: ${secondaryText};
  }

  h1 {
    color: ${primaryText};
  }
`;

const BaseContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: ${primaryBackgroundColor};
`;

const AboutContainer = styled(BaseContainer)`
  background-color: ${primaryBackgroundColor};
  min-height: ${pageHeight};
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
  height: ${pageHeight};
  text-align: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: ${primaryText};
`;

const SecondaryContainer = styled.div`
  background-color: ${secondaryBackgroundColor};
  padding: 20px;
  ${borders}
  border: 1px solid ${borderColor};
`;

const AboutSecondaryContainer = styled(SecondaryContainer)`
  width: 60%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 50px;
  justify-items: center;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 90%;
    grid-template-columns: 1fr;
    gap: 30px;
  }

  img {
    width: 200px;
    border-radius: 38px;
    @media (max-width: 768px) {
      width: 150px;
    }
  }

  span {
    display: block;
  }
`;

const AboutBoxesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 60%;
  box-sizing: border-box;
  margin-top: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 90%;
  }

  & > div {
    background-color: ${secondaryBackgroundColor};
    ${borders}
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    flex: 1 1 calc(33.33% - 20px);
    box-sizing: border-box;

    @media (max-width: 1024px) {
      flex: 1 1 calc(50% - 20px);
    }

    @media (max-width: 768px) {
      flex: 1 1 100%;
    }
  }

  h1 {
    font-size: 1.5rem;
    background-color: ${secondaryBackgroundColor};
    padding: 10px;
    margin: 0;
    height: 40px;
    display: flex;
    align-items: center;
    top: 0;
    z-index: 1;
  }

  p,
  ul {
    font-size: 1rem;
    overflow-y: auto;
    padding-right: 10px;
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
  background-color: ${secondaryBackgroundColor};
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

const LinkStyle = styled(Link)`
  color: ${primaryText};
  margin: 0 25px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding: 5px 0;
  cursor: pointer;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
`;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${secondaryBackgroundColor};
  padding: 20px;
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
    color: ${primaryText};
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
      color: ${buttonColor};
    }
  }
`;

const FooterText = styled.p`
  color: ${secondaryText};
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
  min-height: ${pageHeight};
  background-color: ${secondaryBackgroundColor};
  flex-direction: column;
  align-items: center;
`;

const ProjectCard = styled.div`
  display: flex;
  align-items: center;
  background-color: ${secondaryBackgroundColor};
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
  color: ${primaryText};
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: ${secondaryText};
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
  background-color: ${buttonColor};
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

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ContactInfo = styled.p`
  font-size: 18px;
  color: ${secondaryText};
  text-align: center;
  margin-bottom: 20px;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  justify-content: center;
  background-color: ${primaryBackgroundColor};
`;

const GoUpButtonStyle = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  color: black;
  border: none;
  padding: 12px 16px;
  cursor: pointer;
  z-index: 10;
  transition:
    background-color 0.3s ease,
    transform 0.3;
`;

export {
  GlobalStyle,
  BaseContainer,
  AboutContainer,
  HeaderContainer,
  SecondaryContainer,
  AboutSecondaryContainer,
  AboutBoxesContainer,
  NavStyle,
  NavContainer,
  LinkStyle,
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
  GoUpButtonStyle,
  ImageContainer,

  //color
  primaryBackgroundColor,
  secondaryBackgroundColor,
  primaryText,
  secondaryText,
  buttonColor,
  hoverColor,
  ctaColor,
  borderColor,
};
