import React from 'react';
import HeroAnimation from './HeroAnimation';

const HeroLeft = () => {
  return (
    <div>
      <div className="block">
        <HeroAnimation />
      </div>
      <div className="block">
        <h3 className="is-size-3">I love technology</h3>
      </div>
      <div className="block">
        <h5 className="is-size-5">Based in Ontario, Canada </h5>
      </div>
    </div>
  );
};

export default HeroLeft;
