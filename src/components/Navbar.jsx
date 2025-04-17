// External modules
import { Link } from 'react-scroll';
import { useContext, useEffect, useState } from 'react';
import { FaToggleOff } from 'react-icons/fa6';
import { FaToggleOn } from 'react-icons/fa6';

// Internal modules
import {
  NavStyle,
  NavContainer,
  NavLinks,
  StyledLink,
  LinkText,
  LinkTooltip,
  ToggleButton,
  Tooltip,
} from '../styles/navbarStyles';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {
  const { toggleTheme, isDark } = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  function ToggleMode(isDark) {
    return isDark ? (
      <FaToggleOn size={isMobile ? 30 : 40} />
    ) : (
      <FaToggleOff size={isMobile ? 30 : 40} />
    );
  }

  const navItems = [
    { id: 'experience-section', full: 'Experience', abbr: 'Exp...' },
    { id: 'education-section', full: 'Education', abbr: 'Edu...' },
    { id: 'projects-section', full: 'Projects', abbr: 'Proj...' },
    { id: 'contact-section', full: 'Contact', abbr: 'Con...' },
  ];

  return (
    <NavContainer>
      <NavStyle>
        <NavLinks>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              style={{ textDecoration: 'none' }}
            >
              <StyledLink $isMobile={isMobile}>
                <LinkText>
                  {isMobile ? item.abbr : item.full}
                  {isMobile && <LinkTooltip>{item.full}</LinkTooltip>}
                </LinkText>
              </StyledLink>
            </Link>
          ))}
        </NavLinks>
        <ToggleButton onClick={toggleTheme}>
          {ToggleMode(isDark)}
          <Tooltip>Switch Mode</Tooltip>
        </ToggleButton>
      </NavStyle>
    </NavContainer>
  );
}

export default Navbar;
