import React from 'react';
import AboutContent from '../Components/AboutContent';
import IconCard from '../Components/IconCard';

const About = ({data}) => {
  if (data) {
    var title = data.title;
    var content = data.content;
    var icons = data.icons.map(function (icon) {
      return <IconCard icon={icon}/>
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
                <div className="block">
                  <div className="box">
                    <h5 className="is-size-5">The weather where I am currently:</h5>
                  </div>
                </div>
                <div className="block">
                  <div className="box">
                    <h5 className="is-size-5">My favourite team's next game:</h5>
                  </div>
                </div>
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
