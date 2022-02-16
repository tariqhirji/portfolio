import React from 'react'

const Socials = ({socials}) => {
    if (socials) {
        var socialIcons = socials.map((social) => {
            return <a href={social.url} rel='noreferrer' key={social.id} target="_blank" className='mr-6'><i className={social.className} id={social.id} style={{color: social.color}}></i></a>
        })
    }

    return (
        <div>
            {socialIcons}
        </div>
    )
}

export default Socials