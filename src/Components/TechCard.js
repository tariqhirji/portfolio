import React from 'react';
import html5 from '../img/frontend/html5.svg'

const TechCard = () => {
  return (
    <div className="TechCard has-text-centered column is-4">
        <img src={html5} alt="html badge" />
        <h3>HTML5</h3>
    </div>
    );
};

export default TechCard;
