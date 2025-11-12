import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// Import Routes
import contactRoutes from "./routes/contactRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import qualificationRoutes from "./routes/qualificationRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js"; 

// Import Middleware
import { verifyToken } from "./middleware/authMiddleware.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = "mongodb://127.0.0.1:27017/Portfolio";
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected Successfully (Compass)"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualifications", qualificationRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes); 


app.get("/api/protected", verifyToken, (req, res) => {
  res.json({ message: "✅ You accessed a protected route!", userId: req.userId });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

app.get("/api/auth/protected", verifyToken, (req, res) => {
  res.json({ message: "✅ Access granted!", userId: req.userId });
});


