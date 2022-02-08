import React, {useState} from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
                // Reset form and let user know
                setName('');
                setEmail('');
                setMessage('');
                alert('Message sent!')
        }, (error) => {
                alert('Something went wrong!');
                console.log(error);
        });
    }

    return (
    <form className='ContactForm' onSubmit={handleSubmit}>
        
        {/* Name field */}
        <div class="field">
            <label class="label">Name</label>
            <div class="control has-icons-left">
                <input class="input" type="text"  placeholder='Your Name' onChange={e => (setName(e.target.value))} value={name} name='name'/>
                <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
                </span>
            </div>
        </div>

        {/* Email Field */}
        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
                <input class="input" type="email" placeholder="Your Email" onChange={e => setEmail(e.target.value)} value={email} name='email'/>
                <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
                </span>
            </div>
        </div>

        {/* Message Field */}
        <div className="field">
            <label className="label">Message</label>
            <textarea class="textarea" placeholder="Your Message" onChange={e => setMessage(e.target.value)} value={message} name='message'></textarea>
        </div>

        {/* Submit Button */}
        <button class="button is-primary is-fullwidth my-5" type='submit'>Send</button>
    </form>
    );
};

export default ContactForm;
