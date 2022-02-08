import React from 'react';
import Badge from './Badge';
import project1 from '../img/project1.jpg'

const ProjectCard = ({project}) => {
    if (project) {
        var badges = project.badges.map(function (badge){
          return <Badge name={badge.name}/>
        })
      }

    return (
        <div className="card my-6">
            <div className="columns is-vcentered">
                <div className="column is-6">
                    <div className="card-content">
                        <div className="content">
                            <div className="block mb-4">
                                <h2 className="is-size-1 title">{project.title}</h2>
                            </div>

                            <div className="block mb-4">
                                <h2 className="is-size-2 subtitle has-text-grey">{project.subtitle}</h2>
                                {badges}
                            </div>

                            <div className="block">
                                <h5 className="is-size-5">
                                    {project.description}
                                </h5>
                            </div>

                            <div className="block">
                                <a href={project.url} className="button is-primary">
                                    {project.buttonText}
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="column is-6 py-0">
                    <img src={project1} alt="Degree Planner" className='image' />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
