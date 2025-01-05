// app/booking/BookingForm.tsx
'use client';

import { useEffect, useState } from 'react';

interface BookingFormProps {
  onSubmit: (data: any) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingData = { date, time, guests, name, contact };
    onSubmit(bookingData);
  };

  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  const fetchAvailableTimes = async (selectedDate: string) => {
    // Simulate API call to fetch available time slots based on the selected date
    const response = await fetch(`/api/getAvailableTimes?date=${selectedDate}`);
    const data = await response.json();
    setAvailableTimes(data.times);
  };

  useEffect(() => {
    if (date) fetchAvailableTimes(date);
  }, [date]);



  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      <div>
        <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      <div>
        <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
        <select
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        >
          <option value="">Select Time</option>
          {availableTimes.map((slot) => (
            <option key={slot} value={slot}>{slot}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of Guests</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      <div>
        <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
        <input
          type="text"
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">Book Table</button>
    </form>
  );
};

export default BookingForm;
