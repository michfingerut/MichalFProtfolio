import { Link } from 'react-scroll';
import {
  HeaderContainer,
  SecondaryContainer,
  NavStyle,
  hoverColor,
  NavContainer,
  primaryText,
} from '../styles/styles';

function Header() {
  return (
    <HeaderContainer>
      <SecondaryContainer>
        <NavContainer>
          <NavStyle>
            <Link
              to="about-section"
              smooth={true}
              style={{
                color: primaryText,
                margin: '0 25px',
                fontSize: '18px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                position: 'relative',
                padding: '5px 0',
                cursor: 'pointer',
                transition: 'color 0.3s ease, transform 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.target.style.color = hoverColor;
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseOut={(e) => {
                e.target.style.color = primaryText;
                e.target.style.transform = 'scale(1)';
              }}
            >
              About
            </Link>
          </NavStyle>
        </NavContainer>
        <h1>Michal Fingerut</h1>
        <p>A Software Developer based in Central district, Israel.</p>
        <p>Here you will find information about my skills, projects and more</p>
      </SecondaryContainer>
    </HeaderContainer>
  );
}

export default Header;
