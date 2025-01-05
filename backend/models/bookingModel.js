// models/bookingModel.js
class Booking {
  constructor(id, name, contact, date, time, guests) {
    this.id = id;
    this.name = name;
    this.contact = contact;
    this.date = date;
    this.time = time;
    this.guests = guests;
  }
}

module.exports = Booking;
