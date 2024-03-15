import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./components/home/Home";
import Project from "./pages/projects/Project";
import Resume from "./pages/resume/Resume";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./components/project details/ProjectDetails";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import MainNavbar from "./components/navbar/Navbar";
// import Connect from "./pages/Connect";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/projects/:title" element= {<ProjectDetails />} />
        <Route path="/resume" element = {<Resume />} />
        {/* <Route path="/connect" element = {<Connect />} /> */}
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
