  import React from 'react';
import AboutContent from '../Components/AboutContent';
import IconCard from '../Components/IconCard';
import SportDynamic from '../Components/SportDynamic';
import WeatherDynamic from '../Components/WeatherDynamic';

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
              <div className="column  is-12-touch is-12-desktop is-6-widescreen has-text-dark">
                <AboutContent content={content} />
                <button className="button is-primary my-4 firamono">View Resume</button>
              </div>
              {/* Dynamics Col */}
              <div className="column is-12-touch is-12-desktop is-6-widescreen">
                <WeatherDynamic />
                <SportDynamic sport={sport}/>
              </div>
            </div>

            {/* Icons */}
            <div className="columns is-vcentered">
                {icons}
            </div>

           



        </div>
    </section> 
    );
};

export default About;
