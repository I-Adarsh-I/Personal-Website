import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function MainNavbar() {
  
  const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);
  const [top, setTop] = useState(0);
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        setTop(0);
      } else {
        setTop(-70);
      }
      setPrevScrollpos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  const navbarStyle = {
    top: `${top}px`,
    transition: "top 0.3s",
  };

  return (
    <div className="nav-main-container" style={navbarStyle}>
      <Navbar expand="lg" className="nav">
        <Container>
          <div className="name-con">
            <Navbar.Brand className="nav-heading">
              <h2
                style={{
                  cursor: "pointer",
                  margin: "0",
                  padding: "0",
                  fontSize: "36px",
                }}
              >
                <NavLink
                  id="navhead"
                  to="/"
                  className={({ isActive }) => {
                    return (
                      "text-zinc-400 no-underline " +
                      (isActive
                        ? "text-zinc-600 no-underline"
                        : "text-gray-400 no-underline")
                    );
                  }}
                >
                  Adarsh.
                </NavLink>
              </h2>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          
          <Navbar.Collapse id="navbarScroll">
            <div className="link-con">
              <Nav className="my-2" style={{ maxHeight: "100px" }} navbarScroll>
                <NavLink
                  id="nav-project"
                  to="/projects"
                  className={({ isActive }) => {
                    return (
                      "no-underline " +
                      (isActive
                        ? "text-orange no-underline"
                        : "text-gray no-underline")
                    );
                  }}
                >
                  Projects
                </NavLink>

                <NavLink
                  id="nav-resume"
                  to="/resume"
                  className={({ isActive }) => {
                    return (
                      "no-underline " +
                      (isActive
                        ? "text-orange no-underline"
                        : "text-gray no-underline")
                    );
                  }}
                >
                  Resume
                </NavLink>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
