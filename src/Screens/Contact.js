import React from 'react';
import ContactForm from '../Components/ContactForm';
import contact from "../img/contact.svg";
import '../Styles/Contact.css';

const Contact = () => {
  return (
    <section className="section hero is-fullheight is-white" id='contact'>
      <div className="hero-body px-0">
          <div className="container">
            {/* Title Column */}
            <div className="columns">
                <div className="column is-12 my-3">
                  <h1 className="is-size-1 title">Let's build something awesome together!</h1>
                </div>
            </div>
            {/* Columns for form and graphic */}
            <div className="columns is-vcentered">
                <div className="column is-5">
                  <h4 className="is-size-4 mb-5"> Let's take a great idea and make it a reality. <br/> Send me a message and I'll get back to you shortly.</h4>
                  <ContactForm />
                </div>
                <div className="column is-7 is-flex is-justify-content-center ">
                    <img src={contact} className='image' alt="Contact me" />
                </div>
            </div>
          </div>
      </div>
    </section>
    );
};

export default Contact;
