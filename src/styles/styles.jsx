import styled, { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/laptop-with-notepad-beige-background.jpg';

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
      width: 150px; /* Resize image on smaller screens */
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

export {
  GlobalStyle,
  BaseContainer,
  AboutContainer,
  HeaderContainer,
  SecondaryContainer,
  AboutSecondaryContainer,
  AboutBoxesContainer,
};
