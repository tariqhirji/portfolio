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
          <div className="block">
            <h1 className='is-size-1'>{title}</h1>
          </div>
          <div className="block">
            <div className="columns">
              <div className="column is-8">
                <AboutContent content={content} />
              </div>
              <div className="column is-4">
                <WeatherDynamic />
                <SportDynamic sport={sport}/>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="columns is-vcentered">
                {icons}
            </div>
          </div>
           



        </div>
    </section> 
    );
};

export default About;
