import React from "react";
import "./footer.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillMail,
} from "react-icons/ai";

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
        <AiFillLinkedin className="icon in-icon" />
        <AiFillTwitterCircle className="icon twitter-icon" />
        <AiFillGithub className="icon git-icon" />
        <AiFillMail className="icon mail-icon" />
      </div>
    </footer>
  );
};

export default Footer;
