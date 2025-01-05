import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center bg-gradient-to-r from-blue-500 to-green-500 text-white py-20">
      <h1 className="text-5xl font-extrabold mb-6">
        Welcome to Our Fine Dining Restaurant
      </h1>
      <p className="text-lg mb-8">
        Experience exquisite flavors, a welcoming ambiance, and outstanding service. Book a table and indulge in culinary perfection.
      </p>
      <Link
        href="/booking"
        className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-200"
      >
        Book Your Table Now
      </Link>
    </div>
  );
}
