import React from 'react';
import './intro.css';
import bg from '../../assets/image2.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireMe.png';

const Intro = () => {
  const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Jayamuguntha</span>
        </span>
        <p className="introPara">
          I'm a skilled web designer with keen interests in <br />
          creating UI designs and responsive web pages
        </p>
        <p className="introPara">
          Designing with empathy, building with precision.
        </p>
        <div className="introButtons">
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn btnPrimary">
              <img src={btnImg} alt="Hire Me" className="btnImg" />
              Hire Me
            </button>
          </Link>
          <a
            href={resumeUrl}
            download="Jayamuguntha_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btnSecondary"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="introImageContainer">
        <div className="introImageWrapper">
          <div className="introGlow introGlow1" aria-hidden />
          <div className="introGlow introGlow2" aria-hidden />
          <div className="introRing" aria-hidden />
          <img src={bg} alt="Profile" className="bg" />
          <span className="introSparkle introSparkle1" aria-hidden />
          <span className="introSparkle introSparkle2" aria-hidden />
          <span className="introSparkle introSparkle3" aria-hidden />
        </div>
      </div>
    </section>
  );
};

export default Intro;
