import React from 'react'

const AboutContent = ({content}) => {
    if (content) {
        var paragraph1 = content.p1;
        var paragraph2 = content.p2;
    }

    return (
        <div className='is-size-4 firacondensed has-text-dark'>
            <div className="block">
              <p >{paragraph1}</p>
            </div>
            <div className="block">
              <p >{paragraph2}</p>
            </div>
        </div>
    )
}

export default AboutContent