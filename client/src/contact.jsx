/* 
  File: contact.jsx
  Name: Hojun Kim
  Student ID: 301459546
  Date: Nov 12, 2025
*/

import React, { useState } from "react";
import axios from "axios";
import ContactList from "./components/ContactList";
import "./App.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const token = localStorage.getItem("token"); // 로그인 토큰
  const role = localStorage.getItem("role");   // user / admin

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contacts", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStatus("✅ Your message has been sent!");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      setStatus("❌ Failed to send your message.");
    }
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h2>Contact Page</h2>
      
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "20px",
        }}
      >
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ height: "100px", width: "100%" }}
          />
        </div>

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>

      <p style={{ marginTop: "10px" }}>{status}</p>

     
      <ContactList />
    </div>
  );
}
