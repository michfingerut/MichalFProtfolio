//Internal modules
import AboutMain from './components/about/AboutMain';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/projects/Projects';
import { GlobalStyle } from './styles/globalStyles';
import GoUpButton from './components/GoUpButton';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Header />
      <AboutMain />
      <Projects />
      <Contact />
      <Footer />
      <GoUpButton />
    </div>
  );
}

export default App;
