const http = require('http');
const url = require('url');
const querystring = require('querystring');
const mysql = require('mysql');

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'csit128_project'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as ID: ' + connection.threadId);
});

// Create server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const path = parsedUrl.pathname;
  const queryParams = querystring.parse(parsedUrl.query);

  if (req.method === 'GET' && path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<html><body><form action="/register" method="POST">
      <input type="text" name="firstName" placeholder="First Name" required><br>
      <input type="text" name="lastName" placeholder="Last Name" required><br>
      <input type="email" name="email" placeholder="Email" required><br>
      <input type="text" name="phoneNumber" placeholder="Phone Number" required><br>
      <input type="text" name="membershipType" placeholder="Membership Type" required><br>
      <input type="password" name="password" placeholder="Password" required><br>
      <input type="submit" value="Register">
    </form></body></html>`);
  } else if (req.method === 'POST' && path === '/register') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const { firstName, lastName, email, phoneNumber, membershipType, password } = querystring.parse(body);
      const sql = 'INSERT INTO users (firstName, lastName, email, phoneNumber, membershipType, password) VALUES (?, ?, ?, ?, ?, ?)';
      const values = [firstName, lastName, email, phoneNumber, membershipType, password];

      connection.query(sql, values, (err, result) => {
        if (err) {
          console.error('Error inserting data into MySQL: ' + err.stack);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error registering user.');
        } else {
          console.log('User registered successfully.');
          req.session.userId = result.insertId;
          res.writeHead(302, { 'Location': '/success' });
          res.end();
        }
      });
    });
  } else if (req.method === 'GET' && path === '/success') {
    if (req.session.userId) {
      const sql = 'SELECT * FROM user_info WHERE user_id = ?';
      connection.query(sql, [req.session.userId], (err, result) => {
        if (err) {
          console.error('Error retrieving user data from MySQL: ' + err.stack);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error retrieving user data.');
        } else {
          const user = result[0];
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Registration successful! User details: ' + JSON.stringify(user));
        }
      });
    } else {
      res.writeHead(302, { 'Location': '/' });
      res.end();
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Start server
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
