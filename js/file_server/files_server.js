const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const querystring = require('querystring');
const mysql = require('mysql');

const imageDir = path.join(__dirname, '..', '..', 'images');
const cssDir = path.join(__dirname, '..', '..', 'css');
const javaScriptDir = path.join(__dirname, '..', '..', 'js');
const htmlDir = path.join(__dirname, '..', '..', 'src');

// Create MySQL connection pool
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'csit128_project'
};
const pool = mysql.createPool(dbConfig);

// Create an HTTP server listening on port 3333
http.createServer(function (req, res) {
  const parsedUrl = url.parse(req.url);
  const filePath = parsedUrl.pathname;
  const fileExtension = path.extname(filePath);

  if (fileExtension === '.png' || fileExtension === '.jpg' || fileExtension === '.webp') {
    // Serve images (PNG, JPG, and WebP)
    const fileName = path.basename(filePath);
    fs.readFile(path.join(imageDir, fileName), function (err, content) {
      if (err) {
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        let contentType = '';
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
    const fileName = path.basename(filePath);
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
    const fileName = path.basename(filePath);
    fs.readFile(path.join(javaScriptDir, fileName), function (err, content) {
      if (err) {
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(200, { 'Content-type': 'application/javascript' });
        res.end(content);
      }
    });

  } else if (filePath === '/login' && req.method === 'POST') {
    // Handle login request
    let body = '';

    req.on('data', function (data) {
      body += data;
    });

    req.on('end', function () {
      const { username, password } = querystring.parse(body);

      // Query the database to validate the username and password
      pool.getConnection((err, connection) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Internal Server Error');
          return;
        }

        const sql = 'SELECT * FROM user_info WHERE username = ? AND user_password = ?';
        const values = [username, password];

        connection.query(sql, values, (err, results) => {
          connection.release(); // Release the connection back to the pool

          if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Internal Server Error');
            return;
          }

          if (results.length > 0) {
            // Authentication successful
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Login successful');
          } else {
            // Authentication failed
            res.statusCode = 401;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Invalid username or password');
          }
        });
      });
    });
  } else if (filePath === '/register' && req.method === 'POST') {
    // Handle registration request
    let body = '';

    req.on('data', function (data) {
      body += data;
    });


    req.on('end', function () {
      const { password, firstName, lastName, phone, membership, email } = querystring.parse(body);

      
      // Query the database to check if the email already exists
      pool.getConnection((err, connection) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Internal Server Error');
          return;
        }

        const checkEmailSql = 'SELECT * FROM user_info WHERE user_email = ?';
        const checkEmailValues = [email];

        connection.query(checkEmailSql, checkEmailValues, (err, results) => {
          if (err) {
            connection.release(); // Release the connection back to the pool
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Internal Server Error');
            return;
          }

          if (results.length > 0) {
            connection.release(); // Release the connection back to the pool
            // Email already exists
            res.statusCode = 409;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Email already exists');
          } else {
            // Insert the new user into the database
            const insertUserSql =
              'INSERT INTO user_info (user_fname, user_lname, user_phone, membership, user_password, user_email) ' +
              'VALUES (?, ?, ?, ?, ?, ?)';
            const insertUserValues = [firstName, lastName, phone, membership, password, email];

            connection.query(insertUserSql, insertUserValues, (err, result) => {
              connection.release(); // Release the connection back to the pool

              if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
                return;
              }

              res.statusCode = 200;
              res.setHeader('Content-Type', 'text/plain');
              res.end('Registration successful');
            });
          }
        });
      });
    });
  } else {
    // Serve HTML files
    const fileName = filePath === '/' ? 'index.html' : path.basename(filePath);
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

console.log('Server running at http://localhost:3333/');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "csit128_project"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  var sql_table =
    "CREATE TABLE IF NOT EXISTS user_info (user_id INT AUTO_INCREMENT PRIMARY KEY, " +
    "user_fname VARCHAR(50)," +
    "user_lname VARCHAR(50)," +
    "user_phone VARCHAR(20)," +
    "membership ENUM('Solo', 'Duo', 'Family')," +
    "user_password VARCHAR(32)," +
    "user_email VARCHAR(50))";

  con.query(sql_table, function (err, result) {
    if (err) throw err;
    console.log("User Table created");
  });
});
