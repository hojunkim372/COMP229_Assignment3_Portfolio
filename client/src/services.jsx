/* 
  File: services.jsx
  Name: Hojun Kim
  Student ID: 301459546
  Date: Sept 18, 2025
*/
import React from "react";
import "./App.css";

export default function Services() {
  return (
    // Main container for the Services page
    <div className="container">
      {/* Page Title */}
      <h1>Services</h1>

      {/* Introductory Paragraph describing overall expertise */}
      <p>
        As a <strong>Junior Data Analyst</strong> with a background in{" "}
        <em>Full-Stack Development, Data Management, and Analytical Thinking</em>,
        here are the key areas where I can contribute:
      </p>

      {/* Card 1: Full-Stack Development */}
      <div className="card">
        <h2>Full-Stack Development</h2>
        <p>
          Experienced in building interactive web applications using{" "}
          <strong>React.js, Node.js, and MongoDB</strong>. Applied knowledge of
          the Software Development Lifecycle (SDLC) to design, develop, and
          deploy responsive applications.
        </p>
      </div>

      {/* Card 2: Data Management & Analysis */}
      <div className="card">
        <h2>Data Management & Analysis</h2>
        <p>
          Skilled in organizing and analyzing datasets, with hands-on project
          experience such as creating a{" "}
          <strong>Formula 1 racing data visualization web app</strong>. Strong
          focus on combining data analysis with intuitive and user-friendly UI
          design.
        </p>
      </div>

      {/* Card 3: Problem Solving & Leadership */}
      <div className="card">
        <h2>Problem Solving & Leadership</h2>
        <p>
          Adaptable and multilingual in Korean and English. Leadership experience
          from military service in Korea, where I managed transportation data to
          optimize dispatch operations. Strong analytical and problem-solving
          skills applied in both academic and real-world settings.
        </p>
      </div>
    </div>
  );
}
