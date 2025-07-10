
// Importing the express module to create a web server.
// This module is essential for building web applications in Node.js.
const express = require('express');

// We use path.join to ensure the path is correct across different operating systems.
const path = require('path');

// Create an instance of an Express application.
// This instance will be used to set up routes and middleware for our application.
const app = express();

// Define the port on which the server will listen.
const port = 3000;

// Log the current directory to the console for debugging purposes.
// __dirname is a global variable in Node.js that contains the directory name of the current module
console.log("__dirname: ", __dirname);

// Import the banking data from a JSON file.
// This data will be served through the API endpoint we create later.
const data = require('./data/banking.json');

// Set up middleware to serve static files from the "public" directory.
// This allows us to serve HTML, CSS, and JavaScript files directly to the client.


app.use('/', express.static(path.join(__dirname, 'public')));

// Set up a route to serve the main application page
// When a user accesses the root URL (http://localhost:3000/), they will receive the index.html file located in the "public" directory.
app.use((err, req, res, next) => {
    res.status(404).send("<h1>Error 404, Cannot find your request!<h1>");

    // We can log the error stack for debugging purposes
    console.error(err.stack);

    // Handle additional error scenarios, like 500 Internal Server Errors
    res.status(500).send('Something broke!');
})

app.get('/banking', (req, res) => {
    // Respond with the banking data in JSON format
    res.json(data);
});

// Start the server and listen on the specified port
// This will make the server available at http://localhost:3000/
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});