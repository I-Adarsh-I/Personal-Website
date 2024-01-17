import React from "react";
import "./cards.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import JsonData from "../json data/card.json";
import ApproachData from "../json data/approachCard.json";
import ProjectData from "../json data/ProjectData.json";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function Cards() {
  return (
    <>
      <Fade>
        <div className="parent" id="project_card">
          {JsonData &&
            JsonData.map((data, index) => {
              return (
                <div className="card-main-container" key={index}>
                  <div className="l-con">
                    <h1 className="card-head">
                      <span className="card-title-span">{data.firstL}</span>
                      {data.Title}
                    </h1>
                    <p className="main-card-description-l leading-8">
                      {data.Description} <br />
                      {data.Description2}
                    </p>
                  </div>
                  <div className="r-con">
                    <div className="rt-con">
                      <Row xs={1} md={2} className="g-1">
                        {data.imgCard &&
                          data.imgCard.map((imgData, index) => {
                            return (
                              <div key={index} style={{ width: "fit-content" }}>
                                <Card className="img-card">
                                  <Link to={`/projects/${imgData.Title}`}>
                                    <Card.Img
                                      variant="top"
                                      src={imgData.Img}
                                      className="card-img"
                                    />
                                  </Link>
                                  <Card.Body>
                                    <Card.Title className="card-text-head">
                                      {imgData.Title}
                                    </Card.Title>
                                    <Card.Text
                                      style={{ fontSize: "13px" }}
                                      className="card-text-des tag"
                                    >
                                      {imgData.Description}
                                    </Card.Text>
                                  </Card.Body>
                                </Card>
                              </div>
                            );
                          })}
                      </Row>
                    </div>
                    <div className="rb-con">
                      <Link
                        to="/projects"
                        className=" btn btn-outline-secondary card-btn"
                      >
                        {" "}
                        View More{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Fade>
    </>
  );
}

function Approach() {
  return (
    <>
      <div className="parent approach-card">
        {ApproachData &&
          ApproachData.map((data, index) => {
            return (
              <div className="card-main-container" key={index}>
                <div className="l-con">
                  <h1 className="card-head">
                    My <span className="card-title-span">{data.firstL}</span>
                    {data.Title}
                  </h1>
                  <p className="main-card-description-l leading-8">{data.Description}</p>
                </div>
                <div className="r-con">
                  <div className="rt-con">
                    <Row xs={1} md={2} className="g-1">
                      {data.imgCard &&
                        data.imgCard.map((imgData, index) => {
                          return (
                            <div key={index} style={{ width: "fit-content" }}>
                              <Card className="img-card">
                                <Card.Body>
                                  <div className="approach-icon">
                                    {imgData.Img}
                                  </div>
                                  <Card.Title className="card-text-head">
                                    {imgData.Title}
                                  </Card.Title>
                                  <Card.Text
                                    style={{ fontSize: "13px" }}
                                    className="card-text-des"
                                  >
                                    {imgData.Description}
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </div>
                          );
                        })}
                    </Row>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

function ProjectPage() {
  return (
    <>
      <div className="proj-details-main-card">
        {ProjectData &&
          ProjectData.map((data, index) => {
            return (
              <div className="proj-main-card-con" key={index}>
                <div className="main-card-l-sec">
                  <Fade cascade damping={0.3}>
                    <Card
                      className={
                        data.imgL ? "flex-col proj-det-card" : "proj-det-card"
                      }
                    >
                      {/* proj-det-card */}
                      {data.imgL && (
                        <Link to={`/projects/${data.Title}`} className="proj-link">
                          {" "}
                          <Card.Img
                            variant="top"
                            src={data.imgL}
                            className="rounded l-img"
                          />
                        </Link>
                      )}
                      <div className="content-container">
                        <Card.Title className="per-proj-card-title">
                          {data.tag && (
                            <p className="tag" style={{ fontSize: "14px" }}>
                              {data.tag}
                            </p>
                          )}
                          <h1 className="proj-main-title">{data.Title}</h1>
                          <h4 className="sub">{data.sub}</h4>
                        </Card.Title>
                        <div className="sep-line"></div>
                        <Card.Text className="leading-relaxed per-proj-des">
                          {data.Description}
                        </Card.Text>
                        <div>
                          <Link
                            to={`/projects/${data.Title}`}
                            className="decoration-orange-400 arrow-btn"
                          >
                            <Button
                              variant="outline-secondary"
                              className="card-btn redirection-btn"
                            >
                              View More
                            </Button>
                          </Link>
                        </div>
                      </div>

                      {data.img && (
                        <Link to={`/projects/${data.Title}`} className="proj-link">
                          <Card.Img
                            variant="top"
                            src={data.img}
                            className="rounded r-img"
                          />
                        </Link>
                      )}
                    </Card>
                  </Fade>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export { Approach, ProjectPage };
export default Cards;
