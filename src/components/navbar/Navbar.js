import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function MainNavbar() {

  return (
    <div className="nav-main-container">
      <Navbar expand="lg" className="nav">
        <Container fluid>
          <div className="name-con">
            <Navbar.Brand  className="nav-heading">
              <h2 style={{cursor:'pointer', margin: "0", padding: "0", fontSize: "36px" }}>
              <NavLink id="navhead" to='/' className={({isActive}) => {
                    return(
                      'text-zinc-400 no-underline ' +
                      (isActive ? 'text-zinc-600 no-underline' : 'text-gray-400 no-underline')
                    )
                  }}>Adarsh.</NavLink>
              </h2>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="link-con">
              <Nav className="my-2" style={{ maxHeight: "100px" }} navbarScroll>
                  <NavLink id="nav-project" to='/projects' className={({isActive}) => {
                    return(
                      'no-underline ' +
                      (isActive ? 'text-orange-500 no-underline' : 'text-gray-700 no-underline')
                    )
                  }}>Projects</NavLink>
                  
                  <NavLink id="nav-resume" to='/resume' className={({isActive}) => {
                    return(
                      'no-underline ' +
                      (isActive ? 'text-orange-500 no-underline' : 'text-gray-700 no-underline')
                    )
                  }}>Resume</NavLink>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
