import React from 'react';

const HeroNav = () => {
  return (
    <div>
        <div className="hero-head">
                <header className="navbar is-fixed-top" id='navbar'>
                    <div className="container">
                        <div className="navbar-brand" id='navbar-brand'>
                            <a className="navbar-item is-size-3" href="#top">Tariq Hirji</a>
                            <span class="navbar-burger" id="burger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div className="navbar-menu" id='nav-links'>
                        <div class="navbar-end">
                           
                            <a class="navbar-item is-size-5 is-uppercase" id="projects-link" href='#projects'>
                                Projects
                            </a>
                            <a class="navbar-item is-size-5 is-uppercase" id="skills-link" href="#skills" data-target="skills"> 
                                Skills
                            </a>
                            <a class="navbar-item is-size-5 is-uppercase" id="about-link" href='#about'>
                                About
                            </a>
                            <a class="navbar-item is-size-5 is-uppercase" id="contact-link" href='#contact'>
                                Contact
                            </a>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
    </div>
    );
};

export default HeroNav;
