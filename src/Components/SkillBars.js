import React from 'react'
import SkillBar from 'react-skillbars';

const SkillBars = ({data}) => {
    if (data) {
        var title = data.title;
        var skills = data.skills;
        var colors = data.colors;

        var bar = <SkillBar skills={skills} colors={colors} animationDelay={1000}/>;
    }

    return (
        <div className='SkillBars has-text-dark'>
            <h3 className="is-size-2 title has-text-centered mb-4 firamono has-text-dark">{title}</h3>
            {bar}
        </div>
    )
}

export default SkillBars