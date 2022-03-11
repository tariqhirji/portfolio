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
            <h1 className="is-size-3-mobile is-size-1-tablet title is-large has-text-dark">
                {static1} <br className='is-hidden-mobile'/>
                {static2} <br className='is-hidden-tablet'/> <span className='dynamic-text'>{text}<Cursor /></span>
            </h1>
        </div>
    )
}

export default HeroAnimation;