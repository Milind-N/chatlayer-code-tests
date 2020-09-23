const setupSocketIO = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected');

    // Listen to 'sendMessage' for messages from client
    socket.on('sendMessage', (message) => {
      console.log('Message received:', message);
      // Send the message to the sender (connected socket)
      socket.emit('sendMessage', message);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};

module.exports = {
  setupSocketIO,
};
