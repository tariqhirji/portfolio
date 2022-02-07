import React from 'react';

const ContactForm = () => {
  return (
    <div className='ContactForm'>
        {/* Name field */}
        <div class="field">
            <label class="label">Name</label>
            <div class="control has-icons-left">
                <input class="input" type="text" placeholder="Your Name" />
                <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
                </span>
            </div>
        </div>

        {/* Email Field */}
        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
                <input class="input" type="email" placeholder="Your Email"/>
                <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
                </span>
            </div>
        </div>

        {/* Message Field */}
        <div className="field">
            <label className="label">Message</label>
            <textarea class="textarea" placeholder="Your Message"></textarea>
        </div>

        {/* Submit Button */}
        <button class="button is-primary is-fullwidth my-5">Send</button>
    </div>
    );
};

export default ContactForm;
