import './globals.css';

export const metadata = {
  title: 'Restaurant Table Booking',
  description: 'Book a table at our restaurant easily!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
