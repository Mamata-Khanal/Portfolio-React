import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="social-links">
          <div>
            <h1 className="profile-name"> Mamata Khanal</h1>
            <span
              style={{
                border: "2px solid rgb(255, 255, 255)",
                display: "block",
              }}
            ></span>
          </div>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </a>
            <a
              href="https://www.instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </div>
        </div>

        {/* Email and Social Media Links */}
        <section id=" links" className="links">
          <div className="contact-info">
            {/* Email with Icon */}
            <p className="email-link">
              <FontAwesomeIcon icon={faEnvelope} className="icon" size={"1x"} />
              <a href="khanalmamata55@gmail.com">khanalmamata55@gmail.com</a>
            </p>
            <p className="contact-number">
              <FontAwesomeIcon icon={faPhone} className="icon" size={"1x"} />
              <a href="phone: 9867377095">+977- 9867377095</a>
            </p>
          </div>
        </section>
      </div>
      <p> &copy; 2025 Mamata Khanal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
