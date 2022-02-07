import React from 'react';
import '../Styles/Main.css';

const Badge = ({name}) => {
  return (
        <span className="tag is-medium mr-2 mb-2">{name}</span>
    );
};

export default Badge;
