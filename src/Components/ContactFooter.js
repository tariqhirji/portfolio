import React from 'react'
import Socials from './Socials';

const ContactFooter = ({socials}) => {
    var margin = "mx-5"
    return ( 
        <div className="hero-foot">
            <div className="container is-fullwidth is-size-3 has-text-centered">
                <Socials socials={socials} margin={margin}/>
            </div>
        </div>
    );
}

export default ContactFooter