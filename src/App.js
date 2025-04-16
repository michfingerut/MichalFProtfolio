//Internal modules
import Experience from './components/experience/Experience';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/projects/Projects';
import { GlobalStyle } from './styles/globalStyles';
import GoUpButton from './components/GoUpButton';
import Education from './components/education/Education';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Header />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <GoUpButton />
    </div>
  );
}

export default App;
