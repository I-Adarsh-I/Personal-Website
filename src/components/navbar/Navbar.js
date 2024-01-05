import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

export default function MainNavbar() {
  return (
    <div className="nav-main-container">
      <Navbar expand="lg" className="nav">
        <Container fluid>
          <div className="name-con">
            <Navbar.Brand href="#" className="nav-heading">
              <h2 style={{ margin: "0", padding: "0", fontSize:'36px' }}>Adarsh</h2>
            </Navbar.Brand>
          </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
          <div className="link-con">
              <Nav
                className="my-2"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Projects</Nav.Link>
                <Nav.Link href="#action2">Resume</Nav.Link>
              </Nav>
          </div>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
