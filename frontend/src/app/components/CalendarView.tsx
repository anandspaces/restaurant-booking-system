// app/components/CalendarView.tsx
'use client';

import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';

const CalendarView = ({ onDateSelect }: { onDateSelect: (date: string) => void }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    const formattedDate = date.toISOString().split('T')[0];
    onDateSelect(formattedDate); // Notify parent component about the selected date
  };

  const fetchAvailableTimes = async (selectedDate: string) => {
    // Simulate API call to fetch available time slots for the selected date
    const response = await fetch(`/api/getAvailableTimes?date=${selectedDate}`);
    const data = await response.json();
    setAvailableTimes(data.times);
  };

  useEffect(() => {
    const formattedDate = selectedDate.toISOString().split('T')[0];
    fetchAvailableTimes(formattedDate);
  }, [selectedDate]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Select Reservation Date</h2>
      {/* <Calendar onChange={handleDateChange} value={selectedDate} /> */}
      <div className="mt-4">
        <h3 className="font-semibold">Available Time Slots</h3>
        <ul className="list-disc ml-6">
          {availableTimes.map((time) => (
            <li key={time} className="my-2">
              <button
                onClick={() => alert(`Selected time: ${time}`)} // Handle time selection
                className="bg-blue-500 text-white p-2 rounded"
              >
                {time}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarView;
