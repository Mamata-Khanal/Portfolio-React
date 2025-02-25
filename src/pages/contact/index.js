import React, { useState } from "react";
import "./index.css";

// Import Font Awesome (if not already set up in your project)
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false); // State to track submission status

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setSubmitted(true); // Set Submitted true to show success message

    // Optionally, you can reset the form fields here if needed
    event.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-photo">
          <div className="image-container"><img src="/mobile convocation.jpg" alt="Mamata Khanal"/>
          </div>
        <h2> Mamata Khanal</h2> </div>
        </div>
        <div className="contact-content">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <input type="number" placeholder="Your phone no"/>
          <textarea placeholder=" Enter Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
        {submitted && (
          <p className="success-message">Message sent successfully!! </p>
        )}{" "}
        {/* Success message */}
      </div>
    </section>
    
  );
};

export default Contact;
