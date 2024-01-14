import React, { useEffect } from "react";
import ResumePdf from "../../Assets/Resume.png";
import Navbar from "../navbar/Navbar";
import "./resume.css";
import ResumePDF from "../../Assets/Adarsh_Singh_Resume.pdf";
import { Fade } from "react-awesome-reveal";

function Resume() {

  useEffect(() => {
    document.title = 'Resume | Adarsh Singh';
  })
  return (
    <>
      <Navbar />
      <Fade>
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
      </Fade>
    </>
  );
}

export default Resume;
