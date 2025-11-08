const http = require('http')              // Import Node.js built-in HTTP module
const socketio = require('socket.io')     // Import Socket.IO server library

// Create a basic HTTP server that responds to normal browser requests
const server = http.createServer((req, res) => {
  res.end("I am connected")               // Respond with text if accessed via browser
})

// Attach Socket.IO to the HTTP server
const io = socketio(server, {
  cors: {
    origin: "*",         // allow all origins (for testing)
    methods: ["GET", "POST"]
  }
})

// Listen for new WebSocket connections
io.on('connection', (socket, req) => {
  // Send message to the connected client
  socket.emit('Welcome', 'Welcome to the websocket server!')

  // Listen for any messages sent by the client
  socket.on('message', (msg) => {
    console.log(msg) // Log received messages on server console
  })
})

// Start the HTTP + WebSocket server
server.listen(8000)
