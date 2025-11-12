/* 
  File: about.jsx
  Name: Hojun Kim
  Student ID: 301459546
  Date: Sept 18, 2025
*/
import React from "react";
import "./App.css"; 
import profileImg from "./assets/profile.jpg"; 
import resumePDF from "./assets/resume.pdf";  

// About component: Displays information about the student, profile image, and resume link
export default function About() {
  return (
     // Main container for About page content
    <div className="container">
       
      <h1>About Me</h1>    {/* Page Title */}

      <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginTop: "1.5rem" }}>
       
        <img   /* Profile Image with circular border styling */
          src={profileImg}
          alt="Profile"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #2ecc71",
          }}
        />

        
        <div>
          <h2>Hojun Kim</h2>
          <p>
          Hello! I am an AI Software Engineering Technology student with a strong interest in AI, data analysis, and full-stack development. Through academic projects, I have built experience in Java, Python, C#, JavaScript, SQL, and MongoDB, as well as frameworks like React.js and Node.js.</p>

          <p>
          I have worked on data visualization projects such as a full-stack Formula 1 race data web platform and a Canada Province Tax Calculator. These applications involved building interactive charts, maps, and dynamic user interfaces, which strengthened my ability to transform complex datasets into clear, engaging insights.
          </p>

            {/* Resume Link: Opens PDF in a new browser tab */}
          <a href={resumePDF} className="btn" target="_blank" rel="noopener noreferrer">
            View My Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
