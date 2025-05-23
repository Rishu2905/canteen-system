// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

// Middleware
app.use(cors()); // Allow requests from frontend
app.use(express.json()); // Parse incoming JSON data

// Routes
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);

// Root route (health check or welcome message)
app.get('/', (req, res) => {
  res.send('Welcome to the Canteen Backend API!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
