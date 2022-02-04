import React from 'react';
import ProjectCard from '../Components/ProjectCard';

const Projects = () => {
  return (
    <section className='section' id='projects'>
        <div className="container">
          <h1 className='is-size-1'>Projects</h1>
          <h3 className="is-size-3">This is where I'll keep track of what I've been upto and project I'm fond of. </h3>
          
          <ProjectCard />
        </div>
    </section> 
    );
};

export default Projects;
