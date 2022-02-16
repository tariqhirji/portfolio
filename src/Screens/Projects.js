import React from 'react';
import ProjectCard from '../Components/ProjectCard';

const Projects = ({data}) => {
  if (data) {
    var projects = data.map(function (project){
      return <ProjectCard project={project} key={project.title}/>
    })
  }
  return (
    <section className='section' id='projects'>
        <div className="container">
          <h1 className='is-size-1'>Projects</h1>
          <h3 className="is-size-3">This is where I'll keep track of what I've been upto and project I'm fond of. </h3>
          
          {projects}
        </div>
    </section> 
    );
};

export default Projects;