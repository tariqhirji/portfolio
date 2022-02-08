import React from 'react';
import HeroAnimation from '../Components/HeroAnimation';
import HeroFooter from '../Components/HeroFooter';
import HeroLeft from '../Components/HeroLeft';
import HeroNav from '../Components/HeroNav';
import HeroRight from '../Components/HeroRight';
import '../Styles/Hero.css'

const Hero = () => {
  return (
        <section className="section hero is-fullheight is-white" id='hero'>
            {/* Hero Top - Fixed Navbar */}
            <HeroNav />

            {/* Hero Body */}
            <div className="hero-body px-0">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-12">
                            <HeroAnimation />
                        </div>
                    </div>
                    <div className="columns is-vcentered">
                        <div className="column is-6">
                            <HeroLeft />
                        </div>
                        <div className="column is-6">
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
