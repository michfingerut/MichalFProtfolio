import { Link } from 'react-scroll';
import { HeaderContainer, NavStyle, NavContainer } from '../styles/styles';
import { theme } from '../styles/theme';
import { SecondaryContainer, LinkStyle } from '../styles/commonsStyles';

const linkStyle = {
  color: theme.primaryText,
  margin: '0 25px',
  fontSize: '18px',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  position: 'relative',
  padding: '5px 0',
  cursor: 'pointer',
  transition: 'color 0.3s ease, transform 0.3s ease',
};

const onOver = (e) => {
  e.target.style.color = theme.hoverColor;
  e.target.style.transform = 'scale(1.1)';
};

const onOut = (e) => {
  e.target.style.color = theme.primaryText;
  e.target.style.transform = 'scale(1)';
};

function Header() {
  return (
    <HeaderContainer id="header-container">
      <SecondaryContainer>
        <NavContainer>
          <NavStyle>
            <Link
              to="about-section"
              smooth={true}
              style={linkStyle}
              onMouseOver={(e) => onOver(e)}
              onMouseOut={(e) => onOut(e)}
            >
              About
            </Link>
            <Link
              to="projects-section"
              smooth={true}
              style={linkStyle}
              onMouseOver={(e) => onOver(e)}
              onMouseOut={(e) => onOut(e)}
            >
              Projects
            </Link>

            <Link
              to="contact-section"
              smooth={true}
              style={linkStyle}
              onMouseOver={(e) => onOver(e)}
              onMouseOut={(e) => onOut(e)}
            >
              Contact
            </Link>
          </NavStyle>
        </NavContainer>
        <h1>Michal Fingerut</h1>
        <p>A Software Developer based in Central district, Israel.</p>
        <p>Looking for the next challenge!</p>
      </SecondaryContainer>
    </HeaderContainer>
  );
}

export default Header;
