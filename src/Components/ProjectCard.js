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
        var status = project.status
        var url = project.url;
        var buttonText = project.buttonText;

        var img = project.img;
      }

    return (
        <div className="card my-6">
            <div className="columns is-vcentered is-gapless is-multiline ">

                {/* Content Col */}
                <div className="column is-12-tablet is-6-desktop">
                    <div className="card-content">
                        <div className="content">
                            <div className="block">
                                <h2 className="is-size-2 title">{title}</h2>
                            </div>

                            <div className="block">
                                <h2 className="is-size-3 subtitle has-text-grey">{subtitle}</h2>
                                {badges}
                                <h5>
                                    {description}
                                </h5>

                                {
                                    status === 'inactive'
                                    ? <button disabled className="button is-primary is-light">{buttonText}<i class="fas fa-skull-crossbones ml-3"></i></button>
                                    : <a href={url} className="button is-primary" target="_blank" rel='noreferrer'>{buttonText}<i className="fas fa-code ml-3"></i></a>
                                }

                            </div>

                        </div>
                    </div>
                </div>

                {/* Img Col */}
                <div className="column is-12-tablet is-6-desktop py-0">
                    <img src={img} alt="Degree Planner" className='image' />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
