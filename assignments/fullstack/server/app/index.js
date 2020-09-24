const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

require('express-async-errors');

const app = express();

// Parse json request body
app.use(bodyParser.json());

// Parse urlencoded request body
app.use(bodyParser.urlencoded({ extended: true }));

// Gzip compression
app.use(compression());

// Enable cors
app.use(cors());
app.options('*', cors());

module.exports = app;
