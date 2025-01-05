const express = require('express');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
const port = 5000;

// Middleware to parse JSON data
app.use(express.json());

// Use the booking routes
app.use('/api', bookingRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
