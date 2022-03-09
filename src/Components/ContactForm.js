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
        <div className="field">
            <label className="label firacondensed has-text-dark">Name</label>
            <div className="control has-icons-left">
                <input className="input firamono" type="text"  placeholder='Your Name' onChange={e => (setName(e.target.value))} value={name} name='name' required/>
                <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
                </span>
            </div>
        </div>

        {/* Email Field */}
        <div className="field">
            <label className="label firacondensed has-text-dark">Email</label>
            <div className="control has-icons-left ">
                <input className="input firamono" type="email" placeholder="Your Email" onChange={e => setEmail(e.target.value)} value={email} name='email' required/>
                <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
                </span>
            </div>
        </div>

        {/* Message Field */}
        <div className="field">
            <label className="label firacondensed has-text-dark">Message</label>
            <textarea className="textarea firamono" placeholder="Your Message" onChange={e => setMessage(e.target.value)} value={message} name='message' required></textarea>
        </div>

        {/* Submit Button */}
        <button className="button is-primary is-fullwidth my-5 firamono" type='submit'>Send</button>
    </form>
    );
};

export default ContactForm;
