import React, {useEffect} from 'react'
import aos from 'aos';
import 'aos/dist/aos.css'; 

const IconCard = ({icon}) => {
    if (icon) {
        var trait = icon.trait;
        var description = icon.description
        var className = icon.className;
    }

    useEffect(() => {
        aos.init({duration: 1000});
      }, [])

    return ( 
        <div className="column is-12 is-4-widescreen has-text-centered">
            <div className="box py-5 IconCard has-text-dark" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
                <i className={className}></i>
                <h3 className="mt-4 mb-2 is-size-2 title firamono has-text-dark">{trait}</h3>
                <h5 className="is-size-4 is-size-5-widescreen firacondensed">{description}</h5>
            </div>
        </div>
    )
}

export default IconCard