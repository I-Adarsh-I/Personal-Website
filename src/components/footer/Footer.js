import React from "react";
import "./footer.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillMail,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1 className="foot-text">
          <span className="d">D</span>
          <span>{`esigning dreams, `}</span>
          <span className="d">C</span>
          <span>{`oding realities`}</span>
        </h1>
      </div>
      <div className="icons">
        <Link
          to="https://www.linkedin.com/in/adarsh-singh-17092b244/"
          target="_blank"
        >
          <AiFillLinkedin className="icon in-icon" />
        </Link>
        <Link to="https://twitter.com/darsh_singh0_0" target="_blank">
          <AiFillTwitterCircle className="icon twitter-icon" />
        </Link>
        <Link to="https://github.com/I-Adarsh-I" target="_blank">
          <AiFillGithub className="icon git-icon" />
        </Link>
        <a href="mailto:adarshsi.info@gmail.com" target="_target">
          <AiFillMail className="icon mail-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
