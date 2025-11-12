/* 
  File: logo.js
  Name: Hojun Kim
  Student ID: 123456789
  Date: Sept 18, 2025  
*/

import React from "react";

// Logo component (functional component)
const Logo = () => {
  return (
    
    <div
      style={{
        width: "50px",            
        height: "50px",           
        borderRadius: "50%",      
        backgroundColor: "#4CAF50",
        display: "flex",         
        alignItems: "center",    
        justifyContent: "center",  
        color: "white",          
        fontWeight: "bold",     
        fontSize: "18px",        
      }}
    >
      {/* Initials to represent the student */}
      HK
    </div>
  );
};

export default Logo;
