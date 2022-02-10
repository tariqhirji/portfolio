import React from 'react';
import { useTypewriter, Cursor} from 'react-simple-typewriter';

const HeroAnimation = ({animation}) => {
    if (animation) {
        var static1 = animation.static1;
        var static2 = animation.static2;
        var dynamicWords = animation.dynamic;
    }

    const {text} = useTypewriter({
        words: dynamicWords,
        loop: 0,
        typeSpeed: 100,
        deleteSpeed: 80,
    })

    return (
        <div className='HeroAnimation'>
            <h1 className="is-size-1 title is-large">
                {static1} <br />
                {static2} <span className='dynamic-text'>{text}<Cursor /></span>
            </h1>
        </div>
    )
}

export default HeroAnimation;