# WebSocket Server

A WebSocket server is nothing more than an application listening on any port of a TCP server that follows a specific protocol. The task of creating a custom server tends to scare people; however, it can be straightforward to implement a simple WebSocket server on your platform of choice.

A WebSocket server can be written in any server-side programming language that is capable of Berkeley sockets, such as C(++), Python, PHP, or server-side JavaScript. This is not a tutorial in any specific language, but serves as a guide to facilitate writing your own server.

A WebSocket server is explained on a very low level here. WebSocket servers are often separate and specialized servers (for load-balancing or other practical reasons), so you will often use a reverse proxy (such as a regular HTTP server) to detect WebSocket handshakes, pre-process them, and send those clients to a real WebSocket server. This means that you don't have to bloat your server code with cookie and authentication handlers (for example).

