const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to our home page</h1>');
    } else if (req.url === '/about') {
        // Blocking code
        for (i = 0; i<2000; i++) {
            for (j = 0; j< 2000; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About</h1>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Oops! Page not found</h1>');
    }
});

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});


/// as we can see here our blocking code in /about is blocking other routes to load !! thats why we need to use async   