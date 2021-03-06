import React, {useEffect, useState} from 'react';

import About from './Screens/About';
import Contact from './Screens/Contact';
import Hero from './Screens/Hero';
import Projects from './Screens/Projects';
import Skills from './Screens/Skills';


const App = () => {
  const [portfolioData, setPortfolioData] = useState({});

  useEffect(() => {
    fetch("/portfolioConfig.json")
      .then((res) => res.json())
      .then((data) => setPortfolioData(data))
  }, [])

  return (
    <div className="App" > 
      <Hero data={portfolioData.hero} socials={portfolioData.socials}/>
      <Projects data={portfolioData.projects}/>
      <Skills data={portfolioData.skills}/>
      <About data={portfolioData.about} />
      <Contact data={portfolioData.contact} socials={portfolioData.socials}/>
    </div>
  )
}
  
export default App;