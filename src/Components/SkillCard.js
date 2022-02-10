import React from 'react';
import TechCard from './TechCard';

const SkillCard = () => {
  return (
    <div className='card my-6 is-shadowless'>
        <div className="columns is-vcentered">
            <div className="column is-5 has-text-centered is-size-3">FRONTEND</div>
            <div className="column is-7">
                <div className="columns is-multiline is-vcentered">
                    <TechCard />
                    <TechCard />
                    <TechCard />
                    <TechCard />
                    <TechCard />
                    <TechCard />
                </div>


            </div>
        </div>
    </div>
    );
};

export default SkillCard;
