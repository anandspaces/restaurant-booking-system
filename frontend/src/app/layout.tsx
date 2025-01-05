import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Restaurant Table Booking',
  description: 'Easily book a table at our fine dining restaurant!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-500">Little Lime</h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-blue-500 transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/booking"
                    className="text-gray-700 hover:text-blue-500 transition"
                  >
                    Book a Table
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-700 hover:text-blue-500 transition"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-sm">
              © {new Date().getFullYear()} Little Lime. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
