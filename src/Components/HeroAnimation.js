import React from 'react';
import '../Styles/HeroAnimation.css'

const HeroAnimation = () => {
  return (
    <div>
        <h1 className="is-1 title is-spaced is-large">
            <div className="wrapper is-flex">
                <h1 className="static-text">
                    Hello World, I am
                </h1>
                <ul className='dynamic-text ml-5'>
                    <li><span>Tariq Hirji</span></li>
                    <li><span>a developer</span></li>
                    <li><span>a designer</span></li>
                    <li><span>a dreamer</span></li>
                    <li><span>a drifter</span></li>
                </ul>
            </div>
           


        </h1>
    </div>
    );
};

export default HeroAnimation;
