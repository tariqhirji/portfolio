import React, {useEffect} from 'react';
import aos from 'aos';
import 'aos/dist/aos.css'; 
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

        if (status === 'active') {
            var url = project.url;
        } else {
            var buttonIcon = project.buttonIcon
        }
        var buttonText = project.buttonText;

        var mediaType = project.mediaType
        var mediaUrl = project.mediaUrl;
      }

      useEffect(() => {
        aos.init({duration: 1000});
      }, [])

    return (
        <div className="card my-6 ProjectCard" data-aos="fade-left">
            <div className="columns is-vcentered is-gapless is-multiline">

                {/* Content Col */}
                <div className="column is-12-touch is-12-desktop is-6-widescreen">
                    <div className="card-content">


                            <h2 className="is-size-2 title is-spaced">{title}</h2>
      

                            <div className="mb-3">
                                <h2 className="is-size-3 subtitle has-text-grey">{subtitle}</h2>
                                {badges}
                            </div>

                            <h5 className='is-size-4 is-size-5-widescreen mb-4 firacondensed has-text-dark'>{description}</h5>
                            {/* Conditional Button if project is inactive */}
                            {
                                status === 'inactive'
                                ? <button disabled className="button is-primary is-light notActive">{buttonText}<i className={`ml-3 ${buttonIcon}`}></i></button>
                                : <a href={url} className="button is-primary" target="_blank" rel='noreferrer'>{buttonText}<i className="fas fa-code ml-3"></i></a>
                            }


                    </div>
                </div>

                {/* Img Col */}
                <div className="column is-12-touch is-12-desktop is-6-widescreen py-0">
                    <article className='media' >
                    {
                        mediaType === 'image'
                        ? <img src={mediaUrl} alt={title} />
                        : (<iframe src={mediaUrl} width="100%" height='410'  title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
                    }
                    </article>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
