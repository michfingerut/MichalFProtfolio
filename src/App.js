import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// Internal modules
import {
  ThemeProvider as CustomThemeProvider,
  useTheme,
} from './context/ThemeContext';
import Experience from './components/experience/Experience';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/projects/Projects';
import GoUpButton from './components/GoUpButton';
import Education from './components/education/Education';
import { GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <CustomThemeProvider>
      <AppWithTheme />
    </CustomThemeProvider>
  );
}

const AppWithTheme = () => {
  const { theme } = useTheme(); // Get the current theme from context

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Header />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <GoUpButton />
    </StyledThemeProvider>
  );
};

export default App;
