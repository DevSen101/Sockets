const http = require('http')
const websocket = require('ws')

const server = http.createServer((req, res) => {
 res.end('I am connected')
})

const wss = new websocket.WebSocketServer({server})

server.listen(8000, () => {
 console.log('Server listening on port 8000!');
})