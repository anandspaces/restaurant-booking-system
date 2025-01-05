const fs = require('fs');
const path = require('path');

// Path to the bookings data file
const bookingsPath = path.join(__dirname, '../data/bookings.json');

// Load bookings from JSON file
function loadBookings() {
  if (fs.existsSync(bookingsPath)) {
    const data = fs.readFileSync(bookingsPath, 'utf-8');
    return JSON.parse(data);
  }
  return [];
}

// Save bookings to JSON file
function saveBookings(bookings) {
  fs.writeFileSync(bookingsPath, JSON.stringify(bookings, null, 2));
}

module.exports = {
  loadBookings,
  saveBookings,
};
