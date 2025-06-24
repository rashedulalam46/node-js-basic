//console.log('Hello, World!');

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Welcome to my Node.js server!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});