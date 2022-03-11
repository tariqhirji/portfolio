  import React from 'react';
import AboutContent from '../Components/AboutContent';
import IconCard from '../Components/IconCard';
import SportDynamic from '../Components/SportDynamic';
import WeatherDynamic from '../Components/WeatherDynamic';

import pdf from '../Tariq_Web_Resume_March_2022.pdf';

const About = ({data}) => {
  if (data) {
    var title = data.title;
    var content = data.content;
  
    var sport = data.sport;
    
    var icons = data.icons.map(function (icon) {
      return <IconCard icon={icon} key={icon.trait}/>
    })

    
  }

  return (
    <section className='section' id='about'>
        <div className="container">

            <h1 className='is-size-1 section-title'>{title}</h1>

            <div className="columns is-multiline">
              {/* Content Col */}
              <div className="column is-12 is-6-widescreen has-text-dark">
                <AboutContent content={content} />
                <a className="button is-primary my-4 firamono" href={pdf} target ="_blank">View Resume</a>
              </div>
              {/* Dynamics Col */}
              <div className="column is-12 is-6-widescreen">
                <WeatherDynamic />
                <SportDynamic sport={sport}/>
              </div>
            </div>

            {/* Icons */}
            <div className="columns is-vcentered is-multiline">
                {icons}
            </div>
        </div>
    </section> 
    );
};

export default About;
