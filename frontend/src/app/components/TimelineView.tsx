// app/components/TimelineView.tsx
'use client';

import React, { useState, useEffect } from 'react';
// import Timeline from 'react-calendar-timeline';
// import moment from 'moment';

const TimelineView = ({ onTimeSlotSelect }: { onTimeSlotSelect: (time: string) => void }) => {
  const [items, setItems] = useState<any[]>([]); // List of time slots as events
  const [groups, setGroups] = useState<any[]>([]); // Each group is a row of time slots

  const fetchAvailableSlots = async () => {
    // Simulate an API call to get the available and booked slots
    const response = await fetch('/api/getAvailableSlots');
    const data = await response.json();
    setItems(data.items);
    setGroups(data.groups);
  };

  useEffect(() => {
    fetchAvailableSlots();
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">Select Reservation Time</h2>
      {/* <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().toDate()}
        defaultTimeEnd={moment().add(1, 'hour').toDate()}
        onTimeChange={onTimeSlotSelect}
      /> */}
    </div>
  );
};

export default TimelineView;
