import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Avatar } from "@mui/material";

const Landing = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="container h-5/6 lg:h-3/6 flex flex-column lg:items-center flex-lg-row justify-center gap-3 lg: gap-0 lg:justify-between">
        <div className="l-sec flex flex-column lg:justify-center w-1/2">
          <div className="mb-3">
            <Avatar
              alt="Remy Sharp"
              src="/Adarsh.jpg"
              sx={{ width: 56, height: 56, border: "1px solid lightgray" }}
            />
          </div>
          <div>
            <h1 className="font-montserrat text-main-head">
              Hello! I'm Adarsh <br /> Singh
            </h1>
          </div>
          <div className="hidden lg:flex md:flex sm:flex items-center gap-2">
            <button className="border border-sub-gray px-4 py-2 font-montserrat text-mob-small rounded flex gap-2 items-center mr-0 lg:mr-4">
              GitHub
              <GitHubIcon />
            </button>
            <a className="no-underline text-orange" href="">
              View all projects
            </a>
          </div>
        </div>
        <div className="r-sec flex flex-column items-start w-1/2 lg:items-end">
            <h3 className="font-montserrat break-words">
              A MERN Stack developer and UI Designer based in India{" "}
            </h3>
            <p className="font-source-serif-4 mt-2 text-mob-small lg:text-base break-words">
              Passionate about designing and developing websites for enhanced
              user experiences
            </p>
        </div>
        {/* <div className="flex lg:hidden md:hidden sm:hidden items-center gap-2">
              <button className="border border-sub-gray px-4 py-2 font-montserrat text-mob-small rounded flex gap-2 items-center mr-0 lg:mr-4">
                GitHub
                <GitHubIcon />
              </button>
              <a className="no-underline text-orange" href="">
                View all projects
              </a>
            </div> */}
      </div>
    </div>
  );
};

export default Landing;
