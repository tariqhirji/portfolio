import React from 'react';
import SkillCard from '../Components/SkillCard';

const Skills = ({data}) => {
  if (data) {
    var title = data.title;
    var subtitle = data.subtitle;
    var forward = data.forward;
    var goal = data.goal
  }

  return (
    <section className='section' id='skills'>
        <div className="container">
          <h1 className='is-size-1'>{title}</h1>
          <h3 className="is-size-3">{subtitle}</h3>
          <h3 className="is-size-3">{forward}</h3>
          
          <SkillCard />
          <h3 className="is-size-4">{goal}</h3>

        </div>
    </section> 
    );
};

export default Skills;
