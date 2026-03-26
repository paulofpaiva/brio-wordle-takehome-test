require('dotenv').config();
const express = require('express');
const cors = require('cors');
const wordRoutes = require('./routes/wordRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', wordRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Wordle API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
