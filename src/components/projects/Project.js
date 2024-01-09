import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./project.css";
import { ProjectPage } from "../cards/Cards";

function Project() {
  useEffect(() => {
    document.title = "Projects | Adarsh Singh";
  }, []);

  return (
    <>
      <Navbar />
      <div className=" project-main-container">
        <ProjectPage />
      </div>
      <Footer />
    </>
  );
}

export default Project;
