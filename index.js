//console.log('Hello, World!');

// This is a simple Node.js server that responds with a welcome message

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Welcome to my first Node.js project!');
});

server.listen(3000, () => {``
  console.log('Server running at http://localhost:3000');
});