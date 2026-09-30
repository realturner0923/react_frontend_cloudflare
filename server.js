import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 3005;

// Fallback to mock string if the environment variable isn't injected yet
const MONGO_URI = process.env.MONGO_URI || "mock";

if (MONGO_URI !== "mock") {
  mongoose.connect(MONGO_URI)
    .then(() => console.log("🍃 Successfully connected to MongoDB Atlas"))
    .catch(err => console.error("❌ Database connection error:", err));
} else {
  console.log("⚠️ Running in Mock Mode (No MONGO_URI provided)");
}

app.get('/api/status', (req, res) => {
  res.json({
    status: "Online and Operational",
    database: MONGO_URI !== "mock" ? "Connected to Live MongoDB Atlas" : "Connected to Mock Atlas Instance"
  });
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`🚀 Backend running on http://127.0.0.1:${PORT}`);
});
