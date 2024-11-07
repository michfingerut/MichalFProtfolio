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
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 50px;
  justify-items: center;
  align-items: center;

  img {
    width: 200px;
    border-radius: 38px;
    @media (max-width: 768px) {
      width: 150px;
    }
  }
`;

const AboutBoxesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 20px;
  width: em;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }

  & > div {
    background-color: ${secondaryBackgroundColor};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    height: 350px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;
    gap: 10px;
    position: relative;
  }

  h1 {
    font-size: 1.5rem;
    background-color: ${secondaryBackgroundColor};
    padding: 10px;
    margin: 0;
    height: 40px;
    display: flex;
    align-items: center;
    position: sticky;
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
  justify-content: flex-end;
  align-items: center;
  background-color: ${secondaryBackgroundColor};
  padding: 15px 30px;
  position: sticky;
  top: 0;
  zindex: 1000;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

const LinkStyle = styled(Link)`
  color: ${primaryText};
  margin: 0 25px;
  fontsize: 18px;
  fontweight: 600;
  texttransform: uppercase;
  letterspacing: 2px;
  position: relative;
  padding: 5px 0;
  cursor: pointer;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
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

  //colors
  primaryBackgroundColor,
  secondaryBackgroundColor,
  primaryText,
  secondaryText,
  buttonColor,
  hoverColor,
  ctaColor,
  borderColor,
};
