const { loadBookings, saveBookings } = require('../models/bookingModel');

// Get all bookings
exports.getBookings = (req, res) => {
  const bookings = loadBookings();
  res.status(200).json(bookings);
};

// Create a new booking
exports.createBooking = (req, res) => {
  const { name, contact, date, time, guests } = req.body;

  // Validate input
  if (!name || !contact || !date || !time || !guests) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const bookings = loadBookings();

  // Check for double booking
  const isSlotTaken = bookings.some(
    (booking) => booking.date === date && booking.time === time
  );

  if (isSlotTaken) {
    return res.status(400).json({ message: 'This time slot is already booked' });
  }

  // Add new booking
  const newBooking = { id: Date.now(), name, contact, date, time, guests };
  bookings.push(newBooking);

  // Save bookings
  saveBookings(bookings);

  res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
};

// Delete a booking by ID
exports.deleteBooking = (req, res) => {
  const { id } = req.params;

  const bookings = loadBookings();
  const updatedBookings = bookings.filter((booking) => booking.id !== parseInt(id, 10));

  if (bookings.length === updatedBookings.length) {
    return res.status(404).json({ message: 'Booking not found' });
  }

  // Save updated bookings
  saveBookings(updatedBookings);

  res.status(200).json({ message: 'Booking deleted successfully' });
};
