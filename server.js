const express = require('express');
const cors = require('cors');
require('dotenv').config();

const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

app.get('/', (req, res) => {
  res.send('Welcome to the Canteen Backend API!');
});