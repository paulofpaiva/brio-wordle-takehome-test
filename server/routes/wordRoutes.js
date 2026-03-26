const express = require('express');
const router = express.Router();

router.post('/hello-world', (req, res) => {
  res.status(501).json({ error: 'Not implemented yet' });
});

module.exports = router;
