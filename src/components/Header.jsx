import { Link } from 'react-scroll';
import { HeaderContainer, SecondaryContainer } from '../styles/styles';

function Header() {
  return (
    <HeaderContainer>
      <SecondaryContainer>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
          <nav
            style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: '#333',
              padding: '10px 0',
            }}
          >
            <Link
              to="about-section"
              smooth={true}
              duration={500}
              style={{ color: 'white', margin: '0 20px', cursor: 'pointer' }}
            >
              About
            </Link>
            {/* You can add more links here in the future */}
          </nav>
        </div>
        <h1>Michal Fingerut</h1>
        <p>A Software Developer based in Central district, Israel.</p>
        <p>Here you will find information about my skills, projects and more</p>
      </SecondaryContainer>
    </HeaderContainer>
  );
}

export default Header;
