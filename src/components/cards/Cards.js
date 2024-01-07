import React from "react";
import "./cards.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import JsonData from "../json data/card.json";
import ApproachData from "../json data/approachCard.json";

function Cards() {
  return (
    <>
      <div className="parent" id="project_card">
        {JsonData &&
          JsonData.map((data, index) => {
            return (
              <div className="card-main-container" key={index}>
                <div className="l-con">
                  <h1>
                    <span className="card-title-span">{data.firstL}</span>
                    {data.Title}
                  </h1>
                  <p>{data.Description}</p>
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
                                  <Card.Title>{imgData.Title}</Card.Title>
                                  <Card.Text style={{fontSize:"13px"}}>{imgData.Description}</Card.Text>

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
                  <h1>
                    My <span className="card-title-span">{data.firstL}</span>
                    {data.Title}
                  </h1>
                  <p>{data.Description}</p>
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
                                  <Card.Title>{imgData.Title}</Card.Title>
                                  <Card.Text style={{fontSize:"13px"}}>
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

export { Approach };
export default Cards;
