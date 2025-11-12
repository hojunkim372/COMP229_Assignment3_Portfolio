/* 
  File: signup.jsx
  Name: Hojun Kim
  Student ID: 301459546
  Date: Nov 12, 2025
*/

import React, { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", formData);
      setStatus("✅ Account created successfully!");
      setFormData({ username: "", email: "", password: "" });
    } catch (err) {
      console.error(err);
      setStatus("❌ Sign up failed.");
    }
  };

  return (
    <div style={container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} style={formBox}>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit" style={button}>Sign Up</button>
      </form>
      <p>{status}</p>
    </div>
  );
}

const container = {
  maxWidth: "400px",
  margin: "40px auto",
  background: "#f9f9f9",
  padding: "20px",
  borderRadius: "8px",
  border: "1px solid #ddd",
};

const formBox = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const button = {
  marginTop: "10px",
  backgroundColor: "#2ecc71",
  border: "none",
  color: "white",
  padding: "8px",
  borderRadius: "5px",
  cursor: "pointer",
};
