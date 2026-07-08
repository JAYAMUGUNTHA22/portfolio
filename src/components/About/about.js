import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            About <span>Me</span>
          </h2>
          <div className="about-title-underline" />
          <p className="about-tagline">Developer · Designer</p>
        </div>

        <div className="about-bio">
          <p className="about-description">
            Hey, I'm <strong>Jayamuguntha</strong> — a developer who loves clean code,
            clever solutions, and late-night commits. When I'm not building web
            apps, I enjoy learning new technologies and improving my craft.
          </p>
        </div>

        <div className="about-education">
          <h3 className="about-edu-heading">Education</h3>
          <div className="edu-cards">
            <div className="edu-card about-card-1">
              <span className="edu-year">2021</span>
              <h4>SSLC</h4>
              <p className="edu-score">100%</p>
              <p className="edu-school">Vidhya Vikashini Matric Higher Secondary School, Tirupur</p>
              <span className="edu-board">State Board</span>
            </div>
            <div className="edu-card about-card-2">
              <span className="edu-year">2023</span>
              <h4>HSC</h4>
              <p className="edu-score">93.6%</p>
              <p className="edu-school">Vidhya Vikashini Matric Higher Secondary School, Tirupur</p>
              <span className="edu-board">State Board</span>
            </div>
            <div className="edu-card about-card-3">
              <span className="edu-year">2023 – 2027</span>
              <h4>B.E. Computer Science</h4>
              <p className="edu-score">CGPA 8.18</p>
              <p className="edu-school">Bannari Amman Institute of Technology</p>
              <span className="edu-board">Under graduation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
