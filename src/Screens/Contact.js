import React, {useEffect} from 'react';
import aos from 'aos';
import 'aos/dist/aos.css'; 
import ContactFooter from '../Components/ContactFooter';
import ContactForm from '../Components/ContactForm';

const Contact = ({data, socials}) => {
  if (data) {
    var title = data.title;
    var subtitle = data.subtitle;
    var img = data.img;
  }

  useEffect(() => {
    aos.init({duration: 1000});
  }, [])

  return (
    <section className="section hero is-fullheight is-white" id='contact'>
      <div className="hero-body px-0">
        <div className="container">

          {/* Title Column */}
          <div className="columns">
              <div className="column is-12 my-3">
                <h1 className="is-size-1 title has-text-dark">{title}</h1>
              </div>
          </div>

          {/* Columns for form and graphic */}
          <div className="columns is-vcentered">

              {/* Form */}
              <div className="column is-6" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                <h4 className="is-size-4 mb-5 contact-subtitle has-text-dark firacondensed">{subtitle}</h4>
                <ContactForm />
              </div>

              {/* Graphic */}
              <div className="column is-6 is-flex is-justify-content-center" data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                <img src={img} className='image' alt="Contact me" />
              </div>
          
          </div>
        </div>
      </div>

      {/* Contact Footer of socials */}
      <ContactFooter socials={socials}/>
    </section>
    );
};

export default Contact;
