// app/booking/page.tsx
import BookingForm from './BookingForm';

const BookingPage = () => {
  const handleBookingSubmit = (data: any) => {
    // Call backend API to create booking (e.g., with fetch or axios)
    console.log('Booking Data:', data);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book Your Table</h1>
      <BookingForm onSubmit={handleBookingSubmit} />
    </div>
  );
};

export default BookingPage;
