/* 
  File: project.jsx
  Name: Hojun Kim
  Student ID: 301459546
  Date: Sept 18, 2025
*/
import React from "react";
import "./App.css"; 
import f1Img from "./assets/f1.jpg";
import f1Img2 from "./assets/f1_2.jpg";     

import taxImg from "./assets/tax.jpg";        
import pokemonImg from "./assets/pokemon.jpg"; 

export default function Projects() {
  return (
    <div className="container">
       {/* Page Title */}
      <h1>My Projects</h1>
      <p>Here are some projects I have worked on recently:</p>

      {/* Formula 1 Data Visualization */}
      <div className="card">
        <h2>Formula 1 Data Visualization</h2>
        <img
          src={f1Img}
          alt="Formula 1 Project"
          style={{ width: "100%", borderRadius: "6px", marginBottom: "1rem" }}
        />
        <img
          src={f1Img2}
          alt="Formula 1 Project"
          style={{ width: "100%", borderRadius: "6px", marginBottom: "1rem" }}
        />
        <p>
        Built a full-stack web app (React.js, Node.js, MongoDB) to visualize race data with interactive tables and charts; completed 2018 season and expanding through 2024, enhancing accessibility of complex statistics 
         
        </p>
      </div>

      {/* Canada Province Tax Calculator */}
      <div className="card">
        <h2>Canada Province Tax Calculator</h2>
        <img
          src={taxImg}
          alt="Tax Calculator"
          style={{ width: "100%", borderRadius: "6px", marginBottom: "1rem" }}
        />
        <p>
        Developed an interactive React.js + CSS web app with a clickable Canada map and province-specific tax calculator, developed in a Vite and Node.js environment, enabling fast and accurate regional tax lookups          
         
        </p>
      </div>

      {/* Pokémon API Project */}
      <div className="card">
        <h2>Pokémon API Application</h2>
        <img
          src={pokemonImg}
          alt="Pokémon API Project"
          style={{ width: "100%", borderRadius: "6px", marginBottom: "1rem" }}
        />
        <p>
          Built a Pokédex application using the <strong>PokéAPI</strong> and javascript.  
          Features include search, detailed modals, error handling, and a favourites system with localStorage.  
         
      
        </p>
      </div>
    </div>
  );
}
