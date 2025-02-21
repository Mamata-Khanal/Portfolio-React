import React from "react";
import "./index.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2> About Me</h2>
      <p>
        {" "}
        As a passionate QA Engineer with a year of experience in software
        testing, I specialize in both manual and automated testing techniques.
        My journey in quality assurance has equipped me with a keen eye for
        detail and a commitment to delivering high-quality software. I have
        hands-on experience with tools such as Selenium and JIRA, and I actively
        collaborate with development teams to enhance product reliability. Eager
        to continually improve my skills, I thrive in dynamic environments where
        I can apply my knowledge to ensure optimal user experiences.
      </p>

      <div className="about-photo">
        {" "}
        <img src="/convocation.jpg"></img>
      </div>

      {/* Education section */}
      <h3> Education</h3>
      <ul>
        <li>
          {" "}
          <strong>
            {" "}
            School Living Certificate (SLC) [Rampur English Boarding Higher
            Secondary School]-[2016]
          </strong>
        </li>
        <li>
          {" "}
          <strong> NEB(+2) [Xavier International College] [2016-2018]</strong>
        </li>
        <li>
          {" "}
          <strong>
            {" "}
            Bachelors Degree -[BSC.CSIT] [Patan Multiple Campus]-[Tribhuvan
            University]-[2018-2023]{" "}
          </strong>{" "}
        </li>
      </ul>

      {/* Download resume Button */}
      <a href="/resume.pdf" download="YourName_Resume.pdf">
        <button className="resume-button"> Download Resume </button>
      </a>
    </section>
  );
};

export default About;
