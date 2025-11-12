import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const signUp = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const newUser = new User({ username, email, password, role: role || "user" });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    if (user.password !== password) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user._id, role: user.role }, "secretkey", { expiresIn: "1h" });
    res.json({ message: "Sign in successful", token, role: user.role });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const signOut = (req, res) => {
  res.json({ message: "Signed out successfully" });
};
