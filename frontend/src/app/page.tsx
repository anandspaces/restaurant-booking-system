// src/app/page.tsx

import React, { useState } from 'react';
// import CalendarView from './components/CalendarView';

const Page = () => {
  // const [selectedDate, setSelectedDate] = useState<string>('');

  // const handleDateSelect = (date: string) => {
  //   setSelectedDate(date);
  // };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Welcome to Restaurant Booking</h1>
      <p className="mb-6 text-lg">Select a date and time for your reservation below:</p>

      {/* Calendar View Component */}
      {/* <CalendarView onDateSelect={handleDateSelect} /> */}

      {/* Display selected date */}
      {/* {selectedDate && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">You have selected:</h2>
          <p className="text-xl">Date: {selectedDate}</p>
        </div>
      )} */}
    </div>
  );
};

export default Page;
