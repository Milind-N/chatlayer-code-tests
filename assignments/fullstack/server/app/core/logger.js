const winston = require('winston');

const { createLogger, format, transports } = winston;
const { combine, timestamp, label, printf } = format;

// Template string format for the console logs.
const consoleFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level.toUpperCase()}: ${message}`;
});

function logger(module) {
  const logTransports = [
    new transports.Console({
      level: 'debug',
      format: combine(
        label({ label: getLabel(module) }),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        consoleFormat,
      ),
      handleException: true,
      json: false,
      colorize: true,
      prettyPrint: true,
    }),
  ];

  // Create new winston logger instance.
  const logger = createLogger({
    transports: logTransports,
    defaultMeta: { service: 'api' },
  });

  // Added this so that winston doesn't exit on unhandled exceptions error.
  logger.exitOnError = false;

  // Create a stream object with a 'write' function that will be used by `morgan`
  logger.stream = {
    write: function (message, encoding) {
      // Use the 'info' log level so the output will be picked up by both transports (file and console)
      logger.info(message);
    },
  };
  return logger;
}

// Add label in log statements
// if module is passed as a string then return the string value
// else return the extracted file name from the module object.
function getLabel(module) {
  let label = '';
  if (typeof module === 'string') {
    label = module;
  } else if (typeof module === 'object') {
    label = module.filename.split('/').slice(-2).join('/');
  }
  return label;
}

module.exports = logger;
