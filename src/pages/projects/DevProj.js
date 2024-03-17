import React from "react";
import './project.css'
// import { DevProjects } from "../../components/cards/Cards";
// import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';

const DevProj = () => {
  return (
    <div className="w-100 h-96 flex flex-column items-center justify-center text-center">
      <h1 className="main-head-dev-proj">Great things coming soon...</h1>
      <h6 className="text-center">Visit <a href="https://github.com/I-Adarsh-I?tab=repositories" className="text-decoration-none text-slate-900 hover:text-purple-700"><GitHubIcon fontSize="small"/></a> for all the projects </h6>
      {/* <DevProjects /> */}
    </div>
  );
};

export default DevProj;
