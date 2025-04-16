import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import { GlobalStyle } from './styles/globalStyles';
import GoUpButton from './components/GoUpButton';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <GoUpButton />
    </div>
  );
}

export default App;
