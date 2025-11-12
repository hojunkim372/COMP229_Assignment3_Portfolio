/* 
  File: MainRouter.jsx
  Name: Hojun Kim
  Student ID: 301459546
  Date: Sept 18, 2025
*/
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "../about";
import Contact from "../contact";
import Project from "../project";
import Services from "../services"; 

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default MainRouter;
