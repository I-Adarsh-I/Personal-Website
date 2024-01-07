import React from "react";
import ResumePdf from '../../Assets/Resume.png'
import Navbar from '../navbar/Navbar'
import './resume.css'
import Button from "react-bootstrap/Button";

function Resume() {

  return (
    <>
    <Navbar/>
    <div className="resume-main-con">
      <img src={ResumePdf} alt="" width={'50%'}/>
      <Button variant="outline-secondary" className="card-btn res-btn">Download Resume</Button>
    </div>
    </>
  );
}

export default Resume;
