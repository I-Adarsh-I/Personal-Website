import React, { useEffect, useState } from "react";
import "./home.css";
import Navbar from "../navbar/Navbar";
import ProjectCard, { Approach } from "../cards/Cards";
import Footer from "../footer/Footer";
import { Fade } from "react-awesome-reveal";
import Landing from "../../pages/landing/Landing";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Adarsh Singh";
  }, []);

  return (
    <>
      <Navbar />
      <Fade cascade duration={500}>
        <Landing />
      </Fade>
      <Fade>
        <ProjectCard />
        <Approach />
      </Fade>
      <Footer />
    </>
  );
}
