import React,{useState} from 'react';
import './contact.css';

const Contact = () =>{
    const [submitted,setSubmitted] = useState(false); // State to track submission status 

    const handleSubmit= (event) => {
        event.preventDefault(); // Prevent default form submission behaviour 
        setSubmitted(true);// Set  Submitted true to show success message 

        // optionally, you can reset the form fields  here if needed
        event.target.reset();
    };
    return(
        <section id="contact" className='contact'>
            <h2> Contact Me </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required/>
                <textarea placeholder="Your Message"></textarea>
                <button type='submit'>send</button>
            </form>
            { submitted && <p className='success-message'> Message sent successfully ! </p>} {/* Success message */}
        </section>
    );
};

export default Contact;