import React from 'react';
import HeroAnimation from '../Components/HeroAnimation';
import HeroFooter from '../Components/HeroFooter';
import HeroLeft from '../Components/HeroLeft';
import HeroNav from '../Components/HeroNav';
import HeroRight from '../Components/HeroRight';
import '../Styles/Hero.css'

const Hero = () => {
  return (
    <div>
        <section className="section hero is-fullheight is-white">
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
                        <div className="column is-7">
                            <HeroLeft />
                        </div>
                        <div className="column is-5">
                            <HeroRight />
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Footer */}
            <HeroFooter />
        </section>
    </div>);
};

export default Hero;
