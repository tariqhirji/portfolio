import React from 'react';
import ContactForm from '../Components/ContactForm';
import contact from "../img/contact.svg";
import '../Styles/Contact.css';

const Contact = () => {
  return (
    <section className="section hero is-fullheight is-white" id='contact'>
      <div className="hero-body px-0">
          <div className="container">
            <div className="columns">
                <div className="column is-12 my-3">
                  <h1 className="is-size-1 title">Let's build something awesome together!</h1>
                </div>
            </div>
            <div className="columns is-vcentered">
                <div className="column is-5">
                  <h4 className="is-size-4 mb-3">Think we would make a great team together? <br/> Send me a message and I'll get back to you shortly.</h4>
                  <ContactForm />
                </div>
                <div className="column is-7 is-flex is-justify-content-center ">
                    <img src={contact} alt="Contact me" />
                </div>
            </div>
          </div>
      </div>
    </section>
    );
};

export default Contact;
