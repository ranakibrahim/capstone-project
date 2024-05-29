const express = require('express');
const cors = require('cors');
require('dotenv').config();
const knex = require('knex');
const knexConfig = require('./knexfile');
const hobbiesRouter = require('./routes/hobbies');


// Initialize Knex with the development configuration
const db = knex(knexConfig);

// Create an Express app
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware setup
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/hobbies', hobbiesRouter(db));

// Handle all other routes
app.get('*', (req, res) => {
  res.status(404).json({ message: 'Page not found!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
