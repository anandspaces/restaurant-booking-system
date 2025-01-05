// src/app/layout.tsx

import React from 'react';
import { Inter } from 'next/font/google'; // You can change to a different font if desired
import './globals.css'; // Global CSS file
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Restaurant Booking System</title>
      </head>
      <body className={inter.className}>
        {/* Header / Navigation Bar */}
        <header className="bg-blue-500 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">Restaurant Booking</Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="hover:text-gray-200">Home</Link>
                </li>
                <li>
                  <Link href="/book" className="hover:text-gray-200">Book a Table</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="container mx-auto py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>&copy; 2025 Restaurant Booking System. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
