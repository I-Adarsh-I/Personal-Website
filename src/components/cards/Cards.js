import React from "react";
import "./cards.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import JsonData from "../json data/card.json";
import ApproachData from "../json data/approachCard.json";
import ProjectData from "../json data/ProjectData.json";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <>
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
                  <p className="main-card-description-l">{data.Description}</p>
                </div>
                <div className="r-con">
                  <div className="rt-con">
                    <Row xs={1} md={2} className="g-1">
                      {data.imgCard &&
                        data.imgCard.map((imgData, index) => {
                          return (
                            <div key={index} style={{ width: "fit-content" }}>
                              <Card
                                style={{ width: "200px" }}
                                className="img-card"
                              >
                                <Card.Img
                                  variant="top"
                                  src={imgData.Img}
                                  width={"200px"}
                                />
                                <Card.Body>
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
                  <div className="rb-con">
                    <Button variant="outline-secondary" className="card-btn">
                      View More
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

function Approach() {
  return (
    <>
      <div className="parent">
        {ApproachData &&
          ApproachData.map((data, index) => {
            return (
              <div className="card-main-container" key={index}>
                <div className="l-con">
                  <h1 className="card-head">
                    My <span className="card-title-span">{data.firstL}</span>
                    {data.Title}
                  </h1>
                  <p className="main-card-description-l">{data.Description}</p>
                </div>
                <div className="r-con">
                  <div className="rt-con">
                    <Row xs={1} md={2} className="g-1">
                      {data.imgCard &&
                        data.imgCard.map((imgData, index) => {
                          return (
                            <div key={index} style={{ width: "fit-content" }}>
                              <Card style={{ width: "200px" }}>
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
                  <div className="rb-con">
                    <Button variant="outline-secondary" className="card-btn">
                      View More
                    </Button>
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
                  <Card className="proj-det-card">
                    <div className="pr-5">
                      <Card.Title>
                        <h1>{data.Title}</h1>
                      </Card.Title>
                      <Card.Text className="leading-relaxed">
                        {data.Description}
                      </Card.Text>
                      <div>
                        <Link to={`/projects/${data.Title}`} className="no-underline text-blue">
                        Go somewhere
                        btn-icon
                        </Link>
                      </div>
                    </div>
                    <Card.Img
                      variant="top"
                      src={data.img}
                      className="w-50 rounded"
                    />
                  </Card>
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
