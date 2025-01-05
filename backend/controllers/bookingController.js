const fs = require('fs');
const path = require('path');
const bookingsPath = path.join(__dirname, '../data/bookings.json');

// Load bookings from JSON
function loadBookings() {
  if (fs.existsSync(bookingsPath)) {
    const data = fs.readFileSync(bookingsPath);
    return JSON.parse(data);
  }
  return [];
}

// Save bookings to JSON
function saveBookings(bookings) {
  fs.writeFileSync(bookingsPath, JSON.stringify(bookings, null, 2));
}

// Get all bookings
exports.getBookings = (req, res) => {
  const bookings = loadBookings();
  res.status(200).json(bookings);
};

// Create a new booking
exports.createBooking = (req, res) => {
  const { name, contact, date, time, guests } = req.body;

  // Basic validation
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

  // Create new booking
  const newBooking = { id: Date.now(), name, contact, date, time, guests };
  bookings.push(newBooking);

  // Save to file
  saveBookings(bookings);

  res.status(201).json({ message: 'Booking successful', booking: newBooking });
};
