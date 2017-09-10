var http = require('http');
var fs = require('fs');

var port = 8000;
var server = http.createServer();
console.log('Listening on', port);

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            if (err) throw err;
            response.write(data);
            response.end();
        });
    } else {
        fs.readFile('./404.png', function (err, data) {
            if (err) throw err;
            response.setHeader("Content-Type", "image/png");
            response.statusCode = 404;
            response.write(data);
            response.end();
        });
    }
});

server.listen(port);
