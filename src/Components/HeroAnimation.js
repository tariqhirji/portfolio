import React from 'react';
import { useTypewriter, Cursor} from 'react-simple-typewriter';

const HeroAnimation = () => {

    const {text} = useTypewriter({
        words: ['Tariq Hirji', 'a developer', 'a designer', 'a sports fanatic', 'an innovator', 'a drifter'],
        loop: 0,
        typeSpeed: 100,
        deleteSpeed: 80,
    })

    return (
        <div className='HeroAnimation'>
            <h1 className="is-size-1 title is-large">
                Hello World, <br /> 
                I am <span className='dynamic-text'>{text}<Cursor /></span>
            </h1>
        </div>
    )
}

export default HeroAnimation;