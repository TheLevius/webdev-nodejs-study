const http = require('http');
const PORT = 3030;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-type', 'application/json');
    // res.write('<head><link rel="stylesheet" href="#"/></head>')
    // res.write('<h1>Hello!</h1>');
    const data = JSON.stringify([
        {name: 'Tommy', age: 35},
        {name: 'Arthur', age: 40}
    ])

    res.end(data);
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening on port ${PORT}`);
})