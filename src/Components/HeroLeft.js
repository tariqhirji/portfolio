import React from 'react';
import HeroAnimation from './HeroAnimation';
import Socials from './Socials';

const HeroLeft = ({content, socials}) => {
  if (content) {
    var animation = content.animation;
    var description = content.description;
    var base = content.base;
  }

  var margin = "mr-6"

  return (
    <div>
      <div className="block">
        <HeroAnimation animation={animation}/>
      </div>
      <div className="block">
        <p className="is-size-4 description">{description}</p>
      </div>
      <div className="block">
        <h5 className="is-size-4 base has-text-grey">{base}<i className="is-size-4 fas fa-map-marker-alt mx-3 pb-3"></i></h5>
      </div>
      <div className="block">
        <h5 className="is-size-3">
          <Socials margin={margin} socials={socials} />
        </h5>
      </div>
     
    </div>
  );
};

export default HeroLeft;
