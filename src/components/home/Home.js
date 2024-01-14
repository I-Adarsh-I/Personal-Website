import React, { useEffect } from "react";
import "./home.css";
import Navbar from "../navbar/Navbar";
import ProjectCard, { Approach } from "../cards/Cards";
import Footer from "../footer/Footer";
import { Fade } from "react-awesome-reveal";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillMail } from "react-icons/ai";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Adarsh Singh";
  }, []);

  return (
    <>
      <Navbar />
      <Fade cascade duration={500}>
        <div className="home-main-container"></div>
        <div className="desktop-1">
          <div className="hero-section-parent">
            <div className="hero-section1">
              <div className="vector-parent">
                <div className="hello-container">
                  <p className="hello">
                    <span className="h">H</span>
                    <span>ello 👋🏼 ,</span>
                  </p>
                  <p className="hello">I am Adarsh Singh</p>
                </div>
              </div>
              <div className="text-box-parent">
                <div className="text-box1">
                  <div className="project-description1">
                    <p className="hello">
                      I am a UI/UX Designer and Fullstack developer <br />
                      based in India specialized in Fullstack development,{" "}
                      <br />
                      and UI/UX Designing.
                    </p>
                  </div>
                </div>
                <div className="wanna-discuss-new-ideasprojec">
                  <div className="wanna-discuss-new-container">
                    <span>
                      <span>Wanna discuss new ideas/project?</span>
                      <span className="span">{` `}</span>
                      <span
                        className="lets-connect"
                        style={{ cursor: "pointer" }}
                      >{`Let’s connect `}</span>
                    </span>
                    <span className="lets-connect">
                      <span>{`🤝🏽 `}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="icons">
              <AiFillLinkedin className="icon in-icon"/>
              <AiFillTwitterCircle className="icon twitter-icon" />
              <AiFillGithub className="icon git-icon" />
              <AiFillMail className="icon mail-icon" />
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <ProjectCard />
        <Approach />
      </Fade>
      <Footer />
    </>
  );
}
