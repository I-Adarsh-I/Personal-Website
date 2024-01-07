import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./components/home/Home";
import Project from "./components/projects/Project";
import Resume from "./components/resume/Resume";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/resume" element = {<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
