// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// POST request to create a booking
router.post('/createBooking', bookingController.createBooking);

// GET request to retrieve a booking by ID
router.get('/getBooking/:id', bookingController.getBooking);

// DELETE request to delete a booking by ID
router.delete('/deleteBooking/:id', bookingController.deleteBooking);

module.exports = router;
