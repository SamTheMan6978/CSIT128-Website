
const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

// Configure MySQL connection
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

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/register', (req, res) => {
  const { firstName, lastName, email, phoneNumber, membershipType, password } = req.body;
  const sql = 'INSERT INTO users (firstName, lastName, email, phoneNumber, membershipType, password) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [firstName, lastName, email, phoneNumber, membershipType, password];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data into MySQL: ' + err.stack);
      return res.status(500).send('Error registering user.');
    }
    console.log('User registered successfully.');
    req.session.userId = result.insertId;
    res.redirect('/success');
  });
});

app.get('/success', (req, res) => {
  if (req.session.userId) {
    const sql = 'SELECT * FROM users WHERE id = ?';
    connection.query(sql, [req.session.userId], (err, result) => {
      if (err) {
        console.error('Error retrieving user data from MySQL: ' + err.stack);
        return res.status(500).send('Error retrieving user data.');
      }
      const user = result[0];
      res.send('Registration successful! User details: ' + JSON.stringify(user));
    });
  } else {
    res.redirect('/');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});