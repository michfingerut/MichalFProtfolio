//External modules
import { Link } from 'react-scroll';
import { useContext } from 'react';
import { FaToggleOff } from 'react-icons/fa6';
import { FaToggleOn } from 'react-icons/fa6';

//Internal modules
import { NavStyle, NavContainer } from '../styles/navbarStyles';
import { theme } from '../styles/theme';
import { ThemeContext } from '../context/ThemeContext';

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

function ToggleMode(isDark) {
  return isDark ? <FaToggleOn size={24} /> : <FaToggleOff size={24} />;
}

function Navbar() {
  const { theme, toggleTheme, isDark } = useContext(ThemeContext);

  return (
    <NavContainer>
      <NavStyle>
        <Link
          to="experience-section"
          smooth={true}
          style={linkStyle}
          onMouseOver={onOver}
          onMouseOut={onOut}
        >
          Experience
        </Link>
        <Link
          to="education-section"
          smooth={true}
          style={linkStyle}
          onMouseOver={onOver}
          onMouseOut={onOut}
        >
          Education
        </Link>
        <Link
          to="projects-section"
          smooth={true}
          style={linkStyle}
          onMouseOver={onOver}
          onMouseOut={onOut}
        >
          Projects
        </Link>
        <Link
          to="contact-section"
          smooth={true}
          style={linkStyle}
          onMouseOver={onOver}
          onMouseOut={onOut}
        >
          Contact
        </Link>
        <button onClick={toggleTheme}>{ToggleMode(isDark)}</button>
      </NavStyle>
    </NavContainer>
  );
}

export default Navbar;
