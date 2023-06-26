var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

var imageDir = path.join(__dirname, '..', '..', 'images');
var cssDir = path.join(__dirname, '..', '..', 'css');
var javaScriptDir = path.join(__dirname, '..', '..', 'js');
var htmlDir = path.join(__dirname, '..', '..', 'src');

// Create an HTTP server listening on port 3333
http.createServer(function (req, res) {
  // Use the URL to parse the requested URL and get the file name
  var parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  var filePath = parsedUrl.pathname;

  // Determine the file extension
  var fileExtension = path.extname(filePath);

  if (fileExtension === '.png' || fileExtension === '.jpg' || fileExtension === '.webp') {
    // Serve images (PNG, JPG, and WebP)
    var fileName = path.basename(filePath);
    fs.readFile(path.join(imageDir, fileName), function (err, content) {
      if (err) {
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        var contentType = '';
        if (fileExtension === '.png') {
          contentType = 'image/png';
        } else if (fileExtension === '.jpg') {
          contentType = 'image/jpeg';
        } else if (fileExtension === '.webp') {
          contentType = 'image/webp';
        }
        res.writeHead(200, { 'Content-type': contentType });
        res.end(content);
      }
    });
  } else if (fileExtension === '.css') {
    // Serve CSS files
    var fileName = path.basename(filePath);
    fs.readFile(path.join(cssDir, fileName), function (err, content) {
      if (err) {
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(200, { 'Content-type': 'text/css' });
        res.end(content);
      }
    });
  } else if (fileExtension === '.js') {
    // Serve JavaScript files
    var fileName = path.basename(filePath);
    fs.readFile(path.join(javaScriptDir, fileName), function (err, content) {
      if (err) {
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(200, { 'Content-type': 'application/javascript' });
        res.end(content);
      }
    });
  } else {
    // Serve HTML files
    var fileName = filePath === '/' ? 'index.html' : path.basename(filePath);
    fs.readFile(path.join(htmlDir, fileName), function (err, content) {
      if (err) {
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(content);
      }
    });
  }
}).listen(3333);

console.log("Server running at http://localhost:3333/");
