require('module-alias/register');

const socketIO = require('socket.io');

const app = require('@app');
const config = require('@config/app.config');
const logger = require('@core/logger')('server');
const { setupSocketIO } = require('@middleware/socketIO');

let server = null;
let io = null;

if (!server) {
  server = app.listen(config.port, () => {
    logger.info(`Listening to port ${config.port}`);
  });

  /**
   * Create Socket.io and setup server socket logic.
   */
  io = socketIO(server);
  setupSocketIO(io);  
}

// Graceful shutdown of nodeJs App.
process.on('SIGTERM', () => {
  logger.info('Graceful shutdown received');
  if (server) {
    server.close();
  }
  if (io) {
    io.close();
  }
});
