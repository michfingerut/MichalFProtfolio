// Internal modules
import { HeaderContainer, SecondaryContainer } from '../styles/headerStyles';

function Header() {
  return (
    <HeaderContainer id="header-container">
      <SecondaryContainer>
        <h1>Michal Fingerut</h1>
        <h2>A Software Developer based in Central district, Israel.</h2>
        <p>
          Successfully transitioned from a career in optometry to software
          development,
          <br />
          showcasing adaptability, a strong learning mindset, and a commitment
          to continuous growth.
        </p>
        <h2>Looking for the next challenge!</h2>
      </SecondaryContainer>
    </HeaderContainer>
  );
}

export default Header;
