const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON requests

// Dummy Users (Replace with a database)
const users = [
  { email: "test@example.com", password: "test123" },
  { email: "afsahfarooqui234@gmail.com", password: "afsah123" }
];
  
// Routes
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Login Route
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        res.json({ message: "Login successful" });
    } else {
        res.status(401).json({ message: "Invalid email or password" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
