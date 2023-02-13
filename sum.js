const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  const numbers = query.numbers;
  
  if (!Array.isArray(numbers)) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bad Request: "numbers" should be a comma-separated list of numbers');
    return;
  }
  
  const sum = numbers.reduce((total, num) => {
    return total + parseInt(num);
  }, 0);
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`The sum of the numbers is ${sum}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
