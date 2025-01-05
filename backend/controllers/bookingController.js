// controllers/bookingController.js
const Booking = require('../models/bookingModel');

// In-memory store for bookings
let bookings = [];

const createBooking = (req, res) => {
  const { name, contact, date, time, guests } = req.body;

  // Validate input
  if (!name || !contact || !date || !time || !guests) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newBooking = new Booking(
    bookings.length + 1, // Simple ID generation
    name,
    contact,
    date,
    time,
    guests
  );

  bookings.push(newBooking);
  res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
};

const getBooking = (req, res) => {
  const { id } = req.params;
  const booking = bookings.find((b) => b.id === parseInt(id));

  if (!booking) {
    return res.status(404).json({ message: 'Booking not found' });
  }

  res.json({ booking });
};

const deleteBooking = (req, res) => {
  const { id } = req.params;
  const index = bookings.findIndex((b) => b.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: 'Booking not found' });
  }

  bookings.splice(index, 1);
  res.json({ message: 'Booking deleted successfully' });
};

module.exports = { createBooking, getBooking, deleteBooking };
