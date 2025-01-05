'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import BookingSummary from './BookingSummary';
import { postBooking } from '@/utils/api';

const bookingSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  contact: z.string().min(10, 'Contact must be at least 10 characters'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  guests: z.number().min(1, 'At least 1 guest is required').max(10, 'Max 10 guests allowed'),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit: SubmitHandler<BookingFormData> = async (data) => {
    try {
      // const response = await fetch('/api/bookings', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      // const result = await response.json();
      const result = await postBooking(data);
      alert(result.message || 'Booking successful!');
      <BookingSummary />
    } catch (error: any) {
      alert(error.message || 'Booking failed!');
    }
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Book Your Table Now
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Please fill out the form below to reserve a table at our restaurant.
        </p>

      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block">Name</label>
          <input
            {...register('name')}
            className="border w-full p-2 rounded"
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block">Contact</label>
          <input
            {...register('contact')}
            className="border w-full p-2 rounded"
            placeholder="Your Contact"
          />
          {errors.contact && <p className="text-red-500">{errors.contact.message}</p>}
        </div>
        <div>
          <label className="block">Date</label>
          <input
            {...register('date')}
            type="date"
            className="border w-full p-2 rounded"
          />
          {errors.date && <p className="text-red-500">{errors.date.message}</p>}
        </div>
        <div>
          <label className="block">Time</label>
          <input
            {...register('time')}
            type="time"
            className="border w-full p-2 rounded"
          />
          {errors.time && <p className="text-red-500">{errors.time.message}</p>}
        </div>
        <div>
          <label className="block">Guests</label>
          <input
            {...register('guests', { valueAsNumber: true })}
            type="number"
            className="border w-full p-2 rounded"
            placeholder="Number of Guests"
          />
          {errors.guests && <p className="text-red-500">{errors.guests.message}</p>}
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
          Submit Booking
        </button>
      </form>
    </>
  );
}
