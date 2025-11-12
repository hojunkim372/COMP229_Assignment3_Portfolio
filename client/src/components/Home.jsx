/* 
  File: Home.jsx
  Name: Hojun Kim
  Student ID: 301459546
  Date: Sept 18, 2025
*/

import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; 

// Home component (functional component)
export default function Home() {
  return (
    // Main container wrapping all content for the Home page
    <div className="container">
      
      {/* Page Heading */}
      <h2>Welcome to My Portfolio</h2>
      
      {/* Introduction Paragraph */}
      <p>
        Hello! I'm <strong>Hojun Kim</strong>, AI Software Engineering student at Centennial College.
      </p>

      {/* Mission Section */}
      <h2>My Mission</h2>
      <p>
        My mission is to grow as a Data Analyst who can solve real-world problems
        through technology and continuous learning, while contributing to impactful
        projects in the future. I aim to transform complex challenges into simple
        solutions by leveraging data, creating applications that make information
        easier to visualize, manage, and use effectively for every user.
      </p>

      {/* Navigation Button to About Page */}
      <div style={{ marginTop: "2rem" }}>
        <Link to="/about" className="btn">
          Learn More About Me
        </Link>
      </div>
    </div>
  );
}
