import React, {useState} from 'react';


const HeroNav = () => {
    const [isActive, setisActive] = useState(false);

    return (
        <div>
            <div className="hero-head">
                <header className="navbar is-fixed-top" id='navbar'>
                    <div className="container">
                        <div className="navbar-brand" id='navbar-brand'>
                            <a className="navbar-item is-size-3" href="#top">Tariq Hirji</a>
                            <button
                                onClick={() => {
                                    setisActive(!isActive);
                                }}
                                className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                                aria-label="menu"
                                aria-expanded="false"
                                data-target="nav-links"
                                id="burger"
                                style={{"height": "64px", "width": "64px"}}
                            >
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </button>
                        </div>
                        <div className={`navbar-menu ${isActive ? "is-active" : ""}`} id='nav-links'>
                            <div className="navbar-end">
                                <a className="navbar-item is-size-5 is-uppercase" id="projects-link" href='#projects'>
                                    Projects
                                </a>
                                <a className="navbar-item is-size-5 is-uppercase" id="skills-link" href="#skills" data-target="skills"> 
                                    Skills
                                </a>
                                <a className="navbar-item is-size-5 is-uppercase" id="about-link" href='#about'>
                                    About
                                </a>
                                <a className="navbar-item is-size-5 is-uppercase" id="contact-link" href='#contact'>
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
