import React from 'react';
import SkillBars from '../Components/SkillBars'

const Skills = ({data}) => {
  if (data) {
    var title = data.title;
    var subtitle = data.subtitle;
    var forward = data.forward;

    var {frontend, backend, data_science, design_devops} = data.bars;
    
    var goal = data.goal;

  }


  return (
    <section className='section' id='skills'>
        <div className="container">
          <h1 className='is-size-1 section-title'>{title}</h1>
          <h3 className="is-size-3 section-subtitle has-text-dark">{subtitle}</h3>
          <h3 className="is-size-3 section-subtitle mb-3 has-text-dark">{forward}</h3>

          <div className="columns is-vcentered my-3">
            <div className="column is-6">
              <div className="box">
                <SkillBars data={frontend} />
              </div>
            </div>
            <div className="column is-6">
              <div className="box">
                <SkillBars data={backend} />
              </div>
            </div>
            </div>
            <div className="columns">
            <div className="column is-6">
              <div className="box">
                <SkillBars data={design_devops} />
              </div>
            </div>
            <div className="column is-6">
              <div className="box">
                <SkillBars data={data_science} />
              </div>
            </div> 
          </div>
          
          <h3 className="is-size-3 section-subtitle has-text-dark">
            {goal}
            <a href='https://reactnative.dev/' target="_blank" rel='noreferrer'>React Native</a>,
            <a href='https://nextjs.org/' target="_blank" rel='noreferrer' className='ml-2'>Next.js</a> and 
            <a href='https://unity.com/' target="_blank" rel='noreferrer' className='ml-2'>Unity</a>.
          </h3>

        </div>
    </section> 
    );
};

export default Skills;
