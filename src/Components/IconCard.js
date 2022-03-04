import React from 'react'

const IconCard = ({icon}) => {
    if (icon) {
        var trait = icon.trait;
        var description = icon.description
        var className = icon.className;
    }
    return ( 
        <div className="column is-4 has-text-centered">
            <div className="box py-5 IconCard has-text-black">
                <i className={className}></i>
                <h3 className="mt-4 mb-2 is-size-2 title firamono">{trait}</h3>
                <h5 className="is-size-5 firacondensed">{description}</h5>
            </div>
        </div>
    )
}

export default IconCard