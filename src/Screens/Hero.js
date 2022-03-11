import React from 'react';
import HeroFooter from '../Components/HeroFooter';
import HeroLeft from '../Components/HeroLeft';
import HeroNav from '../Components/HeroNav';

const Hero = ({data, socials}) => {
    if (data) {
        var content = data.content;
        var image = data.image;
    }

    return (
        <section className="section hero is-fullheight is-white" id='hero'>
            {/* Hero Top - Fixed Navbar */}
            <HeroNav />

            {/* Hero Body */}
            <div className="hero-body px-0">
                <div className="container">
                    <div className="columns is-vcentered is-multiline">
                        <div className="column is-12-touch is-7-desktop">
                            <HeroLeft content={content} socials={socials}/>
                        </div>
                        <div className="column is-12-touch is-5-desktop is-flex is-justify-content-center">
                            <img src={image} alt="hero" />
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
