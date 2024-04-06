/* //HTTP set up
const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.ulr === '/about') {
        res.end('here is short history')
    }
    res.end(`
    <h1>Opps!</h1>
    <p>We cannot find what you are looking for</p>
    <a href="/">back home</a>
    `)
})
server.listen(4000)

// this code allow us to run http server and keep listening http://localhost:4000/
 */
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to our home page</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Here is a short history</h1>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Oops! Page not found</h1>');
    }
});

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});
