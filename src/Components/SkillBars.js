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
        <div className='SkillBars'>
            <h3 className="is-size-3 has-text-centered mb-3 is-uppercase">{title}</h3>
            {bar}
        </div>
    )
}

export default SkillBars