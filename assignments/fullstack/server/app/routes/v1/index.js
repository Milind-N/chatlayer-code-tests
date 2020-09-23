const httpStatus = require('http-status-codes');
const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => {
  res.send({ response: 'Server is up and running.' }).status(httpStatus.OK);
});

module.exports = router;
