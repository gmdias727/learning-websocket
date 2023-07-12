// const http = require('http')

// const port = 8080

// // Create a server object
// http.createServer(function (request, response) {
//     response.writeHead(200, {'Content-Type': 'text/html'})
//     response.write('<marquee>Hello World!</marquee>')
//     response.end()
// }).listen(port)

// console.log(`Server running at http://localhost:${port}/`);

const WebSocket = require('ws')
const server = new WebSocket.Server({ port: 8080 })

let sockets = []

server.on('connection', function (socket) {
    sockets.push(socket)

    socket.on('message', function (message) {
        sockets.forEach(s => s.send(message))
    })

    socket.on('close', function () {
        sockets = sockets.filter(s => s !== socket)
    })
})


