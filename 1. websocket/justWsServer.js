// Import HTTP and WebSocket modules
const http = require('http')
const ws = require('ws')

// Create a basic HTTP server for handshake
const server = http.createServer((req, res) => {
  res.end('I am connected') // Respond to normal HTTP requests
})

// Create a WebSocket server bound to the same HTTP server
const wss = new ws.WebSocketServer({ server })

// Triggered when WebSocket headers are sent to the client
// wss.on('headers', (headers, req) => {
//   console.log(headers) // Log handshake headers
// })

// Triggered when a new WebSocket connection is established
wss.on('connection', (ws, req) => {
  ws.send('Welcome to the websocket server!') // Send greeting to client

  // Listen for messages sent by client
  ws.on('message', (data) => {
    console.log(data.toString()) // Log message from client
  })
})

// Start the HTTP + WebSocket server on port 8000
server.listen(8000, () => {
  console.log('Server listening on port 8000!')
})
