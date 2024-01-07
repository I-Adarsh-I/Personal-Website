import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1>
        <span className="d">D</span>
        <span>{`esigning dreams, `}</span>
        <span className="d">C</span>
        <span>{`oding realities`}</span>
        </h1>
      </div>
      <div className="icons">
        <img className="linkedin-icon1" alt="LinkedIn" src="" width={"30px"}/>
        <img className="x-icon1" alt="X" src="" width={"30px"}/>
        <img className="git-icon1" alt="GitHub" src="" width={"30px"}/>
        <img className="email-icon1" alt="Email" src="" width={"30px"}/>
      </div>
    </footer>
  );
};

export default Footer;
