import React from 'react';
import ProjectCard from '../Components/ProjectCard';

const Projects = ({data}) => {
  if (data) {
    var title = data.title;
    var subtitle = data.subtitle;
    var lastUpdate = data.lastUpdate;
    var projects = data.project_list.map(function (project){
      return <ProjectCard project={project} key={project.title}/>
    })
  }
  return (
    <section className='section' id='projects'>
        <div className="container">
          <h1 className='is-size-1 section-title '>{title}</h1>
          <h3 className="is-size-4-mobile is-size-3-tablet section-subtitle has-text-dark">{subtitle}<em>{lastUpdate}</em>.</h3>
          {projects}
        </div>
    </section> 
    );
};

export default Projects;