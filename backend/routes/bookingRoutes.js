const express = require('express');
const { createBooking, getBookings } = require('../controllers/bookingController');

const router = express.Router();

// Routes
router.get('/', getBookings);
router.post('/', createBooking);

module.exports = router;
