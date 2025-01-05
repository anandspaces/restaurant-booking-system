const express = require('express');
const { getBookings, createBooking, deleteBooking } = require('../controllers/bookingController');

const router = express.Router();

// Get all bookings
router.get('/', getBookings);

// Create a new booking
router.post('/', createBooking);

// Delete a booking by ID
router.delete('/:id', deleteBooking);

module.exports = router;
