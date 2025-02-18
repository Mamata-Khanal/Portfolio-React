import React, { useState } from 'react';
import './contact.css';

// Import Font Awesome (if not already set up in your project)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false); // State to track submission status

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        setSubmitted(true); // Set Submitted true to show success message

        // Optionally, you can reset the form fields here if needed
        event.target.reset();
    };

    return (
        <section id="contact" className='contact'>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message"></textarea>
                <button type='submit'>Send</button>
            </form>
            {submitted && <p className='success-message'>Message sent successfully!</p>} {/* Success message */}

            {/* Contact Info*/}
            <section id='contactInfo' className='contactInfo'>
                <h3> Contact Info</h3>
            </section>


            {/* Email and Social Media Links */}
            <div className="contact-info">
                {/* Email with Icon */}
                <p className="email-link">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    <a href="khanalmamata55@gmail.com">khanalmamata55@gmail.com</a>
                </p>

                {/* Social Media Links with Icons */}
                <div className="social-links">
                    <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="icon" />
                    </a>
                    <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="icon" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;