require('module-alias/register');

const app = require('@app');
const config = require('@config/app.config');

let server = null;

if (!server) {
  server = app.listen(config.port, () => {
    console.log(`Listening to port ${config.port}`);
  });
}

// Graceful shutdown of nodeJs App.
process.on('SIGTERM', () => {
  console.log('Graceful shutdown received');
  if (server) {
    server.close();
  }
});
