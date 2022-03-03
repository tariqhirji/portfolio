import React from 'react';
import HeroFooter from '../Components/HeroFooter';
import HeroLeft from '../Components/HeroLeft';
import HeroNav from '../Components/HeroNav';
import HeroRight from '../Components/HeroRight';

const Hero = ({data, socials}) => {
    if (data) {
        var content = data.content;
    }

    return (
        <section className="section hero is-fullheight is-white" id='hero'>
            {/* Hero Top - Fixed Navbar */}
            <HeroNav />

            {/* Hero Body */}
            <div className="hero-body px-0">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-7">
                            <HeroLeft content={content} socials={socials}/>
                        </div>
                        <div className="column is-5 is-flex is-justify-content-center">
                            <HeroRight />
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Footer */}
            <HeroFooter />
        </section>
    );
};

export default Hero;
