const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const hostname = process.env.IP || '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    console.log('request', request.url);

    // Get file path
    let filePath = request.url === '/'
        ? './index.html'
        : `.${request.url}`;

    // Get file extension
    let extname = String(path.extname(filePath))
        .toLowerCase();

    // Set content type based on extension
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.svg': 'application/image/svg+xml'
    };
    let contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            console.log('error', error);

            if (error.code === 'ENOENT') {
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(200, {
                        'Content-Type': contentType
                    });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end(`Sorry, check with the site admin for error: ${error.code} ..\n`);
                response.end();
            }
        }
        else {
            response.writeHead(200, {
                'Content-Type': contentType
            });
            response.end(content, 'utf-8');
        }
    });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
