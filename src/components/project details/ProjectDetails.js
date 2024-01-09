import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectData from "../json data/ProjectData.json";
import Navbar from "../navbar/Navbar";
import './projectdetails.css'

function ProjectDetails() {
  const { title } = useParams();
  useEffect(() => {
    document.title = `Projects - ${title} | Adarsh Singh`;
  }, [title]);

  const project = ProjectData.find((proj) => proj.Title === title);

  return (
    <>
      <Navbar />
    <div className="project-detail-main-card">
      <div className="container h-80">
        <h1>{project.Title}</h1>
      </div>
    </div>
    </>
  );
}

export default ProjectDetails;
