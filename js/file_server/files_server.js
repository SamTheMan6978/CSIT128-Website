const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3333;

// Define the directories for different file types
const imageDir = path.join(__dirname, '..', '..', 'images');
const cssDir = path.join(__dirname, '..', '..', 'css');
const javaScriptDir = path.join(__dirname, '..', '..', 'js');
const htmlDir = path.join(__dirname, '..', '..', 'src');

// Route for the root URL
app.get('/', (req, res) => {
  const file = path.join(htmlDir, 'index.html');
  res.sendFile(file);
});

// Route for CSS files
app.get('/css/:filename', (req, res) => {
  const file = req.params.filename;
  res.sendFile(path.join(cssDir, file));
});

// Route for JavaScript files
app.get('/js/:filename', (req, res) => {
  const file = req.params.filename;
  res.sendFile(path.join(javaScriptDir, file));
});

// Route for image files
app.get('/images/:filename', (req, res) => {
  const file = req.params.filename;
  res.sendFile(path.join(imageDir, file));
});

// Wildcard route to handle all other pages
app.get('*', (req, res) => {
  const page = req.params[0]; // Access the captured parameter using req.params[0]
  const file = path.join(htmlDir, page); // Assuming your HTML files have the .html extension

  // Check if the file exists
  if (fs.existsSync(file)) {
    res.sendFile(file);
  } else {
    // File does not exist, handle accordingly (e.g., return a 404 page)
    res.status(404).send('404 Not Found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
