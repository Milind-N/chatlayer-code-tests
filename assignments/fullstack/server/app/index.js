const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');

const logger = require('@core/logger')('app');

require('express-async-errors');

const AppRouter = require('@routes');

const app = express();

// Parse json request body
app.use(bodyParser.json());

// Parse urlencoded request body
app.use(bodyParser.urlencoded({ extended: true }));

// Logger Middleware to log routes info on console.
app.use(morgan('dev', { stream: logger.stream }));

// Gzip compression
app.use(compression());

// Enable cors
app.use(cors());
app.options('*', cors());

// Api routes with versioning enabled.
app.use('/api', AppRouter);

module.exports = app;
