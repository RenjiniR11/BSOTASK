import http from 'http';
import { Server as SocketIOServer } from 'socket.io';

// Create an HTTP server
const server = http.createServer();

// Create a WebSocket server
const io = new SocketIOServer(server);

// Handle WebSocket connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle custom events from the client
  socket.on('event-name', (data) => {
    console.log('Event data:', data);
    // Broadcast the event to all connected clients
    io.emit('product-added', data);
  });

  // Handle disconnects
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the WebSocket server
const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`WebSocket server running on port ${port}`);
});
