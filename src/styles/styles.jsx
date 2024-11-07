import styled, { createGlobalStyle } from 'styled-components';
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

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
  height: 100vh;
  background-color: ${primaryBackgroundColor};
`;

const AboutContainer = styled(BaseContainer)`
  background-color: ${primaryBackgroundColor};

  @media (max-width: 1024px) {
    height: auto;
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const HeaderContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  text-align: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: ${primaryText};
`;

const SecondaryContainer = styled.div`
  background-color: ${secondaryBackgroundColor};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid ${borderColor};
`;

const AboutSecondaryContainer = styled(SecondaryContainer)`
  width: 70%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 50px;
  justify-items: center;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 90%;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
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
`;

const AboutBoxesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 70%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 90%;
    margin-top: 20px;
  }

  & > div {
    background-color: ${secondaryBackgroundColor};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    height: 350px;
    display: flex;
    flex-direction: column;
    padding: 20px;
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
  background-color: ${primaryBackgroundColor};
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
      color: ${buttonColor}; /* Change hover color if needed */
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
  background-color: #f5f5f5;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 1200px;
  gap: 40px;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ProjectContent = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectTitle = styled.h2`
  color: #333333;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: #333333;
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
  background-color: #d46a34;
  color: white;
  font-size: 0.9rem;
  padding: 5px 10px;
  border-radius: 20px;
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectImage = styled.img`
  width: 500px;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const FullscreenModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const FullscreenImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FullscreenArrowButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const CarouselImage = styled.img`
  object-fit: cover;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
  objectfit: contain;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 20;
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
  CarouselContainer,
  CarouselImage,
  FullscreenModal,
  FullscreenImageContainer,
  FullscreenArrowButton,
  CloseButton,

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
