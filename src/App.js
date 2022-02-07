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
  })

  return (
    <div className="App"> 
      <Hero />
      <Projects data={portfolioData.projects}/>
      <Skills data={portfolioData.skills}/>
      <About />
      <Contact />
    </div>
  )
}
  
export default App;