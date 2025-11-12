/* 
  File: App.jsx
  Name: Hojun Kim
  Student ID: 301459546
  Date: Nov 12, 2025
*/
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MainRouter from "./components/MainRouter";
import SignIn from "./signin";
import SignUp from "./signup";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Layout />
      <Routes>
       
        <Route path="/*" element={<MainRouter />} />
        
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
