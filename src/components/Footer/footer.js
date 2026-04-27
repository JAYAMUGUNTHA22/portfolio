import React from "react";
import { Link } from "react-scroll";
import "./footer.css";
import github from "../../assets/github2.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT: Name + Bio */}
        <div className="footer-left">
          <h2 className="footer-name">
            <span className="footer-name-first">Jayamu</span>
            <span className="footer-name-last">guntha</span>
          </h2>
          <p className="footer-desc">
            I design and develop visually engaging, user-centric web experiences
            with a focus on simplicity and usability. I enjoy blending creativity
            with code to solve real problems.
          </p>
        </div>

        {/* MIDDLE: Quick Links */}
        <div className="footer-middle">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="about" smooth={true} duration={500} offset={-80}>
                About
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} offset={-80}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} offset={-80}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} offset={-80}>
                Education
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT: Connect */}
        <div className="footer-right">
          <h3 className="footer-heading">Connect</h3>
          <a href="mailto:ompjamun@gmail.com" className="footer-email">
            <span className="footer-icon-wrap">✉</span>
            ompjamun@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/jayamuguntha-p-4a39352ab/"
            target="_blank"
            rel="noreferrer"
            className="footer-link-row"
          >
            <span className="footer-icon-wrap linkedin-icon">in</span>
            LinkedIn Profile
          </a>
          <div className="footer-social-row">
            <a
              href="mailto:ompjamun@gmail.com"
              className="footer-social-circle"
              aria-label="Email"
            >
              <span className="footer-social-icon">✉</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jayamuguntha-p-4a39352ab/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-circle"
              aria-label="LinkedIn"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/JAYAMUGUNTHA22"
              target="_blank"
              rel="noreferrer"
              className="footer-social-circle"
              aria-label="GitHub"
            >
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-divider" />
      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Jayamuguntha. All rights reserved.
        </p>
        <p className="footer-tech">
          Made with <span className="footer-heart">❤️</span> using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
