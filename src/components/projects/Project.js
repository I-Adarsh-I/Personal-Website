import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./project.css";
import { ProjectPage } from "../cards/Cards";
import { Fade } from "react-awesome-reveal";

function Project() {
  useEffect(() => {
    document.title = "Projects | Adarsh Singh";
  }, []);

  return (
    <>
      <Navbar />
      <Fade>
        <div className=" project-main-container">
          <ProjectPage />
        </div>
      </Fade>
      <Footer />
    </>
  );
}

export default Project;
