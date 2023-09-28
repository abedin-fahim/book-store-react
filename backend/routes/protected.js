// routes/protected.js
const express = require('express');
const { authenticateToken } = require('../middleware/auth-middleware');
const router = express.Router();

// Protected route
router.get('/protected', authenticateToken, (req, res) => {
  res.json({
    message: `Welcome, ${req.user.username}! This is a protected route.`,
  });
});

module.exports = router;
