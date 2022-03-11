import React, {useEffect} from 'react';
import aos from 'aos';
import 'aos/dist/aos.css'; 
import SkillBars from '../Components/SkillBars'

const Skills = ({data}) => {
  if (data) {
    var title = data.title;
    var subtitle = data.subtitle;
    var forward = data.forward;

    var {frontend, backend, data_science, design_devops} = data.bars;
    
    var goal = data.goal;

  }

  useEffect(() => {
    aos.init({duration: 2000});
  }, [])


  return (
    <section className='section' id='skills'>
        <div className="container">
          <h1 className='is-size-1 section-title'>{title}</h1>
          <h3 className="is-size-4-mobile is-size-3-tablet section-subtitle has-text-dark">{subtitle}</h3>
          <h3 className="is-size-4-mobile is-size-3-tablet section-subtitle mb-3 has-text-dark">{forward}</h3>

          <div className="columns is-vcentered my-3 is-multiline">
            <div className="column is-12-touch is-6-desktop">
              <div className="box" data-aos="zoom-in-down" data-aos-anchor-placement="center-bottom">
                <SkillBars data={frontend} />
              </div>
            </div>
            <div className="column is-12-touch is-6-desktop">
              <div className="box" data-aos="zoom-in-down"  data-aos-anchor-placement="center-bottom">
                <SkillBars data={backend} />
              </div>
            </div>
            <div className="column is-12-touch is-6-desktop">
              <div className="box" data-aos="zoom-in-down"  data-aos-anchor-placement="center-bottom">
                <SkillBars data={design_devops} />
              </div>
            </div>
            <div className="column is-12-touch is-6-desktop">
              <div className="box" data-aos="zoom-in-down"  data-aos-anchor-placement="center-bottom">
                <SkillBars data={data_science} />
              </div>
            </div> 
          </div>
          
          <h3 className="is-size-4-mobile is-size-3-tablet section-subtitle has-text-dark">
            {goal}
            <a href='https://reactnative.dev/' target="_blank" rel='noreferrer' className='is-primary'>React Native</a>,
            <a href='https://nextjs.org/' target="_blank" rel='noreferrer' className='ml-2 is-primary'>Next.js</a> and 
            <a href='https://unity.com/' target="_blank" rel='noreferrer' className='ml-2 is-primary'>Unity</a>.
          </h3>

        </div>
    </section> 
    );
};

export default Skills;
