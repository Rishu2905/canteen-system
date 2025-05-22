const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.send('Menu list here');
});

module.exports = router; // ✅ This is required!
