// app/confirmation/page.tsx
'use client';
import { useRouter } from 'next/router';

const ConfirmationPage = () => {
  const router = useRouter();

  const bookingDetails = router.query; // Assuming the data comes via URL params or state

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Booking Confirmation</h1>
      <div>
        <p><strong>Date:</strong> {bookingDetails.date}</p>
        <p><strong>Time:</strong> {bookingDetails.time}</p>
        <p><strong>Guests:</strong> {bookingDetails.guests}</p>
        <p><strong>Name:</strong> {bookingDetails.name}</p>
        <p><strong>Contact:</strong> {bookingDetails.contact}</p>
      </div>
    </div>
  );
};

export default ConfirmationPage;
