/* 
  File: Layout.jsx
  Name: Hojun Kim
  Student ID: 301459546
  Date: Nov 12, 2025
*/

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../logo";

export default function Layout() {
  return (
    <>
      {/* Header Section */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          padding: "10px",
        }}
      >
        {/* Logo */}
        <Logo />

        {/* Site Title */}
        <h1 className="site-title">Hojun Kim Portfolio</h1>
      </header>

      {/* Navigation Bar */}
      <nav
        style={{
          display: "flex",
          gap: "15px",
          padding: "10px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>

        
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
      <hr />
    </>
  );
}
