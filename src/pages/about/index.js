import React, { useEffect, useState } from "react";
import "./index.css";

const About = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    // Array of timeouts to show each item one by one
    const timeouts = [
      setTimeout(() => setVisibleItems((prev) => [...prev, 0]), 500), // First item
      setTimeout(() => setVisibleItems((prev) => [...prev, 1]), 1000), // Second item
      setTimeout(() => setVisibleItems((prev) => [...prev, 2]), 1500), // Third item
    ];

    // Cleanup timeouts on component unmount
    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

  return (
    <section id="about" className="about">
      {/* Photo on the left side */}
      <div className="about-photo">
        <img src="/convocation.jpg" alt="Convocation" />
      </div>

      {/* Centered content */}
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          As a passionate QA Engineer with a year of experience in software
          testing, I specialize in both manual and automated testing techniques.
          My journey in quality assurance has equipped me with a keen eye for
          detail and a commitment to delivering high-quality software. I have
          hands-on experience with tools such as Selenium and JIRA, and I
          actively collaborate with development teams to enhance product
          reliability. Eager to continually improve my skills, I thrive in
          dynamic environments where I can apply my knowledge to ensure optimal
          user experiences.
        </p>

        {/* Education section with timeline */}
        <h3>Education</h3>
        <div className="timeline">
          <div
            className={`timeline-item ${
              visibleItems.includes(0) ? "visible" : ""
            }`}
          >
            <div className="timeline-content">
              <strong>
                School Living Certificate (SLC) [Rampur English Boarding Higher
                Secondary School] - [2016]
              </strong>
            </div>
          </div>

          <div
            className={`timeline-item ${
              visibleItems.includes(1) ? "visible" : ""
            }`}
          >
            <div className="timeline-content">
              <strong>
                NEB (+2) [Xavier International College] - [2016-2018]
              </strong>
            </div>
          </div>

          <div
            className={`timeline-item ${
              visibleItems.includes(2) ? "visible" : ""
            }`}
          >
            <div className="timeline-content">
              <strong>
                Bachelor's Degree - [BSC.CSIT] [Patan Multiple Campus] -
                [Tribhuvan University] - [2018-2023]
              </strong>
            </div>
          </div>
        </div>

        {/* Download resume Button */}
        <a href="/resume.pdf" download="YourName_Resume.pdf">
          <button className="resume-button">Download Resume</button>
        </a>
      </div>
    </section>
  );
};

export default About;