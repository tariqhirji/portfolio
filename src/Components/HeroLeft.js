import React from 'react';
import HeroAnimation from './HeroAnimation';

const HeroLeft = ({content}) => {
  if (content) {
    var animation = content.animation;
    var description = content.description;
    var base = content.base;
  }

  return (
    <div>
      <div className="block">
        <HeroAnimation animation={animation}/>
      </div>
      <div className="block">
        <p className="is-size-5 description">{description}</p>
      </div>
      <div className="block">
        <h5 className="is-size-5 base has-text-grey">{base}<i class="fas fa-map-marker-alt mx-3 pb-3"></i></h5>
      </div>
    </div>
  );
};

export default HeroLeft;
