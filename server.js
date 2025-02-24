import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs"; // ✅ Using bcryptjs instead of bcrypt
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";


const app = express();
app.use(express.json());
app.use(cors());

// ✅ Corrected MongoDB URI
const mongoURI = "mongodb+srv://shalinipriyajsp:Mongo1234@cluster0.1qy2qgl.mongodb.net/et";
const GEMINI_API_KEY = "AIzaSyCcWwoTW1UPY8vRcBsMgLpy8_vXBOv1SFo";
// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected ✅"))
    .catch(err => console.error("MongoDB connection error ❌:", err));

// User Schema & Model
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});
const User = mongoose.model("User", userSchema);

// 🔹 **Signup Route**
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: "User already exists" });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10); // ✅ bcryptjs

        // Create new user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "Signup successful!" });
    } catch (err) {
        console.error("Signup Error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// 🔹 **Login Route**
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "User not found" });

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password); // ✅ bcryptjs
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });

        res.json({ message: "Login successful!", token });
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) return res.status(400).json({ error: "Message is required" });

        // Generate AI response
        const result = await model.generateContent(message);
        const reply = result.response.text();

        res.json({ reply });
    } catch (error) {
        console.error("Chatbot Error:", error);
        res.status(500).json({ error: "Error processing request" });
    }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));