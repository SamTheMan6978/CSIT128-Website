var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

var imageDir = path.join(__dirname, '..', '..', 'images/');
var cssDir = path.join(__dirname, '..', '..', 'css/');
var javaScriptDir = path.join(__dirname, '..', '..', 'js/');
var htmlDir = path.join(__dirname, '..', '..', 'src/');

// Create HTTP server listening on port 3333
http.createServer(function (req, res) {
  var query = url.parse(req.url, true).query;
  var file;
  console.log(query);
  console.log(query.image);

  if (query.png !== undefined) {
    console.log("png ------------");
    file = query.png;
    fs.readFile(imageDir + file, function (err, content) {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { 'Content-type': 'image/png' });
        res.end(content);
      }
    });
  } else if (query.jpg !== undefined) {
    console.log("jpg ------------");
    file = query.jpg;
    fs.readFile(imageDir + file, function (err, content) {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { 'Content-type': 'image/jpg' });
        res.end(content);
      }
    });
  } else if (query.css !== undefined) {
    console.log("CSS ------------");
    file = query.css;
    fs.readFile(cssDir + file, function (err, content) {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { 'Content-type': 'text/css' });
        res.end(content);
      }
    });
  } else if (query.js !== undefined) {
    console.log("JavaScript ------------");
    file = query.js;
    fs.readFile(javaScriptDir + file, function (err, content) {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { 'Content-type': 'application/javascript' });
        res.end(content);
      }
    });
  } else if (query.html !== undefined) {
    console.log("HTML ------------");
    file = query.html;
    fs.readFile(htmlDir + file, function (err, content) {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(content);
      }
    });
  } else {
    // Return a 404 error for any other requests
    res.writeHead(404, { 'Content-type': 'text/plain' });
    res.end('404 Not Found');
  }

}).listen(3333);

console.log("Server running at http://localhost:3333/");
