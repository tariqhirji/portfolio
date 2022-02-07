import React from 'react';
import SkillCard from '../Components/SkillCard';

const Skills = ({data}) => {

  if (data) {
    // console.log(data);
  }

  return (
    <section className='section' id='skills'>
        <div className="container">
          <h1 className='is-size-1'>Skills</h1>
          <h3 className="is-size-3">Over the years, I have cultivated skills that span over different technologies for various projects. Some I liked, some I loved and some I loathed.</h3>
          <h3 className="is-size-3">Here are some of the ones I find myself using the most:</h3>

          <SkillCard />
        </div>
    </section> 
    );
};

export default Skills;
