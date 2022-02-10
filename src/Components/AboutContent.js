import React from 'react'

const AboutContent = ({content}) => {
    if (content) {
        var paragraph1 = content.p1;
        var paragraph2 = content.p2;
    }

    return (
        <div>
            <div className="block">
              <p className='is-size-5'>{paragraph1}</p>
            </div>
            <div className="block">
              <p className='is-size-5'>{paragraph2}</p>
            </div>
        </div>
    )
}

export default AboutContent