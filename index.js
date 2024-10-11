const http = require('http');
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {
    console.log(url.parse(req.url))
    if (req.url == '/abt') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>This is about page</h1>");
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("This is the default page");
    }
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
