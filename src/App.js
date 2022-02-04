import About from './Screens/About';
import Contact from './Screens/Contact';
import Hero from './Screens/Hero';
import Projects from './Screens/Projects';
import Skills from './Screens/Skills';

const App = () => {
      return (
        <div classname="main"> 
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Contact />
        </div>
      )
  }
  
export default App;