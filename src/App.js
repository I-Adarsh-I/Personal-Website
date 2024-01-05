import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/cards/Cards";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cards" element={<Cards/>} />
      </Routes>
    </div>
  );
}

export default App;
