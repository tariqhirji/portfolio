import React from 'react';
import ContactFooter from '../Components/ContactFooter';
import ContactForm from '../Components/ContactForm';

const Contact = ({data, socials}) => {
  if (data) {
    var title = data.title;
    var subtitle = data.subtitle;
    var img = data.img;
  }

  return (
    <section className="section hero is-fullheight is-white" id='contact'>
      <div className="hero-body px-0">
        <div className="container">

          {/* Title Column */}
          <div className="columns">
              <div className="column is-12 my-3">
                <h1 className="is-size-1 title">{title}</h1>
              </div>
          </div>

          {/* Columns for form and graphic */}
          <div className="columns is-vcentered">

              {/* Form */}
              <div className="column is-6">
                <h4 className="is-size-4 mb-5 contact-subtitle">{subtitle}</h4>
                <ContactForm />
              </div>

              {/* Graphic */}
              <div className="column is-6 is-flex is-justify-content-center ">
                <img src={img} className='image' alt="Contact me" />
              </div>
          
          </div>
        </div>
      </div>

      {/* Contact Footer of socials */}
      <ContactFooter socials={socials} />
    </section>
    );
};

export default Contact;
