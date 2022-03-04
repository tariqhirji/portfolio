import React from 'react'

const Socials = ({socials, margin}) => {
    if (socials) {
        var socialIcons = socials.map((social) => {
            return <a href={social.url} rel='noreferrer' key={social.id} target="_blank" className={margin} ><i className={social.className} id={social.id} style={{color: social.color}}></i></a>
        })
    }

    return (
        <div className='Socials'>
            {socialIcons}
        </div>
    )
}

export default Socials
