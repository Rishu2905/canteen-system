const express = require('express');
const router = express.Router();

// Example route
router.post('/', (req, res) => {
  res.send('Order placed');
});

module.exports = router; // ✅ This is required!
