import React from 'react';
import Badge from './Badge';

const ProjectCard = ({project}) => {
    if (project) {
        var title = project.title;
        var subtitle=project.subtitle;

        var badges = project.badges.map(function (badge){
          return <Badge name={badge.name} key={badge.name}/>
        })

        var description = project.description;
        var url = project.url;
        var buttonText = project.buttonText;

        var img = project.img;
      }

    return (
        <div className="card my-6">
            <div className="columns is-vcentered is-gapless">
                <div className="column is-6">
                    <div className="card-content">
                        <div className="content">
                            <div className="block mb-4">
                                <h2 className="is-size-1 title">{title}</h2>
                            </div>

                            <div className="block mb-4">
                                <h2 className="is-size-2 subtitle has-text-grey">{subtitle}</h2>
                                {badges}
                            </div>

                            <div className="block">
                                <h5 className="is-size-5">
                                    {description}
                                </h5>
                            </div>

                            <div className="block">
                                <a href={url} className="button is-primary">
                                    {buttonText}
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="column is-6 py-0">
                    <img src={img} alt="Degree Planner" className='image' />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
