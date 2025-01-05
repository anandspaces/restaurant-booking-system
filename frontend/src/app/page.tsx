import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Restaurant</h1>
      <p className="mb-6">Book a table with us in just a few clicks!</p>
      <Link href="/booking" className="bg-blue-500 text-white py-2 px-4 rounded">
        Book Now
      </Link>
    </div>
  );
}
