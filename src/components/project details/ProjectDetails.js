import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectData from "../json data/ProjectData.json";
import Navbar from "../navbar/Navbar";
import "./projectdetails.css";
import { Card } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

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
          <Fade>
            <Card className="proj-detail-main-card-con">
              <Card.Body className="proj-det-heads">
                <h1 className="proj-main-title">{project.Title}</h1>
                <h4 className="sub">{project.subtitle}</h4>
              </Card.Body>
                <div className="proj-sep-line"></div>
              {project.img ? (
                <Card.Img
                  variant="bottom"
                  src={project.img}
                  className="rounded proj-details-proj-overview-sec-img"
                />
              ) : (
                <Card.Img
                  variant="bottom"
                  src={project.imgL}
                  className="rounded proj-details-proj-overview-sec-img"
                />
              )}
            </Card>
            <div className="overview-sec">
              <Card className="overview-card border-0 p-4 bg-transparent">
                <Card.Body>
                  <h1 className="proj-main-title">
                    <span className="FN">O</span>verview
                  </h1>
                  <div className="overview-sep-line"></div>
                  <Card.Text className="leading-relaxed main-card-description-l">
                    {project.overviewText}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;
