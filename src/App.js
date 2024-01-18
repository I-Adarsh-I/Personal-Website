import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./components/home/Home";
import Project from "./components/projects/Project";
import Resume from "./components/resume/Resume";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./components/project details/ProjectDetails";
import PageNotFound from "./components/pageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/projects/:title" element= {<ProjectDetails />} />
        <Route path="/resume" element = {<Resume />} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
