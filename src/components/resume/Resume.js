import React from "react";
import ResumePdf from "../../Assets/Resume.png";
import Navbar from "../navbar/Navbar";
import "./resume.css";
import ResumePDF from "../../Assets/Adarsh_Singh_Resume.pdf";

function Resume() {
  return (
    <>
      <Navbar />
      <div className="resume-main-con">
        <img src={ResumePdf} alt="" width={"50%"} />
        <a
          className="btn btn-secondary outline-secondary card-btn res-btn"
          href={ResumePDF}
          download="Adarsh_Singh_Resume"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </a>
      </div>
    </>
  );
}

export default Resume;
