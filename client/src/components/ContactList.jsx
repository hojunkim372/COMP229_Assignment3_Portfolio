/* 
  File: ContactList.jsx
  Name: Hojun Kim
  Student ID: 301459546
  Date: Nov 12, 2025
*/

import React, { useEffect, useState } from "react";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editMessage, setEditMessage] = useState("");

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const fetchContacts = () => {
    fetch("http://localhost:5000/api/contacts", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => setContacts(Array.isArray(data) ? data : []))
      .catch((err) => {
        console.error("❌ Error fetching contacts:", err);
        setError("⚠️ Could not load contacts. Please try again later.");
      });
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleUpdate = async (id) => {
    await fetch(`http://localhost:5000/api/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ message: editMessage }),
    });
    setEditingId(null);
    setEditMessage("");
    fetchContacts();
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/contacts/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchContacts();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📬 Messages Received</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {contacts.length === 0 && !error && <p>No messages found.</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {contacts.map((c) => (
          <li
            key={c._id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <strong>
              {c.firstName} {c.lastName}
            </strong>
            <br />
            ✉️ {c.email} | 📞 {c.phone}
            <br />
            💬{" "}
            {editingId === c._id ? (
              <>
                <input
                  value={editMessage}
                  onChange={(e) => setEditMessage(e.target.value)}
                />
                <button onClick={() => handleUpdate(c._id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {c.message}                
                {role === "admin" && (
                  <>
                    <button
                      onClick={() => {
                        setEditingId(c._id);
                        setEditMessage(c.message);
                      }}
                      style={{ marginLeft: "10px" }}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => handleDelete(c._id)}
                      style={{ marginLeft: "5px", color: "red" }}
                    >
                      🗑️ Delete
                    </button>
                  </>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
