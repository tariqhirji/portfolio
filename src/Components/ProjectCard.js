import React from 'react';
import Badge from './Badge';
import project1 from '../img/project1.jpg'

const ProjectCard = () => {
  return (
    <div className="card my-6 is-shadowless">
        <div className="columns is-vcentered">
            <div className="column is-6">
                <div className="card-content">
                    <div className="content">
                        <div className="block">
                            <h2 className="is-size-2">Degree Planner</h2>
                        </div>

                        <div className="block">
                            <h2 className="is-size-2 ">Web Application</h2>
                            <Badge />
                            <Badge />
                            <Badge />
                            <Badge />
                        </div>

                        <div className="block">
                            <h5 className="is-size-5">
                                This is one oy my favourite projects. I did this and that
                                for hack-western-7 with some friends. We used this and 
                                approach throughout the project. 
                            </h5>
                        </div>

                        <div className="block">
                            <a href={'https://devpost.com/software/degree-planner-m4hdal'} className="button is-primary">
                                View Devpost
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
