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
        <div className="card my-6 ProjectCard animate__animated animate__slideInRight">
            <div className="columns is-vcentered is-gapless is-multiline ">

                {/* Content Col */}
                <div className="column is-12-touch is-12-desktop is-6-widescreen">
                    <div className="card-content">


                            <h2 className="is-size-2 title is-spaced">{title}</h2>
      

                            <div className="mb-3">
                                <h2 className="is-size-3 subtitle has-text-grey">{subtitle}</h2>
                                {badges}
                            </div>

                            <h5 className='is-size-5 mb-4 firacondensed has-text-dark'>{description}</h5>
                            {/* Conditional Button if project is inactive */}
                            {
                                status === 'inactive'
                                ? <button disabled className="button is-primary is-light notActive">{buttonText}<i className="fas fa-skull-crossbones ml-3"></i></button>
                                : <a href={url} className="button is-primary" target="_blank" rel='noreferrer'>{buttonText}<i className="fas fa-code ml-3"></i></a>
                            }


                    </div>
                </div>

                {/* Img Col */}
                <div className="column is-12-touch is-12-desktop is-6-widescreen py-0">
                    <figure className="image">
                        <img src={img} alt="Degree Planner"/>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
