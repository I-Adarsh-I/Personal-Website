import React, { useCallback } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Avatar } from "@mui/material";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillMail,
} from "react-icons/ai";

const Landing = () => {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadSlim(engine);
  }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        // loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#ffffff",
            },
            opacity: 0,
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#ff7a2f", "#ff6600"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 10,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: ["triangle", "circle"],
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
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
              <h1 className="font-montserrat w-max lg:w-full text-main-head-mob lg:text-main-head">
                Hello! I'm Adarsh <br /> Singh
              </h1>
            </div>
            <div className="hidden lg:flex md:flex sm:flex items-center gap-2">
              <Link
                className="border border-sub-gray px-4 py-2 font-montserrat text-mob-small text-black no-underline rounded flex gap-2 items-center mr-0 lg:mr-4"
                to="https://github.com/I-Adarsh-I"
                target="_blank"
              >
                GitHub
                <GitHubIcon />
              </Link>
              <Link
                className="no-underline text-orange text-mob-btn-sm lg:text-base"
                to={"/projects"}
              >
                View all projects
              </Link>
            </div>
          </div>
          <div className="r-sec flex flex-column items-start lg:w-1/2 lg:items-end">
            <h3 className="font-montserrat w-full mb-1 lg:w-10/12 md:w-6/12 break-words text-sub-size-mob lg:text-3xl">
              A Full-Stack(MERN) developer and UI Designer based in India{" "}
            </h3>
            <p className="font-source-serif-4 m-0 mt-2 text-mob-small lg:w-10/12 md:w-6/12 lg:text-base break-words">
              Passionate about designing and developing websites for enhanced
              user experiences
            </p>
            <div className="hidden lg:flex flex-column justify-start  lg:w-10/12 ">
              <h5 className="mt-4 mb-3 font-montserrat">Let's Get connected</h5>
              <div className="icons">
                <Link
                  to="https://www.linkedin.com/in/adarsh-singh-17092b244/"
                  target="_blank"
                >
                  <AiFillLinkedin className="icon in-icon" />
                </Link>
                <Link to="https://twitter.com/darsh_singh0_0" target="_blank">
                  <AiFillTwitterCircle className="icon twitter-icon" />
                </Link>
                <Link to="https://github.com/I-Adarsh-I" target="_blank">
                  <AiFillGithub className="icon git-icon" />
                </Link>
                <a href="mailto:adarshsi.info@gmail.com" target="_target">
                  <AiFillMail className="icon mail-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden md:hidden sm:hidden items-center gap-2">
            <Link
              className="border border-sub-gray px-4 py-2 font-montserrat text-mob-small rounded flex gap-2 text-black no-underline items-center mr-0 lg:mr-4"
              to="https://github.com/I-Adarsh-I"
              target="_blank"
            >
              GitHub
              <GitHubIcon />
            </Link>
            <Link
              className="no-underline text-orange text-mob-btn-sm lg:text-base"
              to={"/projects"}
            >
              View all projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
