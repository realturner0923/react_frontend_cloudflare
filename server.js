import express from 'express';
const app = express();
const PORT = 3005; // Change from 3000 to 3005

app.get('/api/status', (req, res) => {
  res.json({
    status: "Online and Operational",
    database: "Connected to Mock Atlas Instance"
  });
});
// Change this block:
app.listen(PORT, '127.0.0.1', () => {
  console.log(`🚀 Mock backend running on http://127.0.0.1:${PORT}`);
});
