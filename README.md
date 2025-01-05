# Restaurant Booking System

This is a full-stack web application for managing restaurant table bookings. The system includes features such as:

- Viewing and selecting available reservation times
- Making reservations by providing guest details
- Viewing and managing bookings

The project is built with:

- **Frontend**: Next.js (React)
- **Backend**: Node.js with Express
- **Database**: In-memory or file-based (for simplicity)

## Features

- **Calendar View**: A calendar UI for selecting dates and times for table reservations.
- **Booking Form**: A form that captures user details, including name, contact, and the number of guests.
- **Availability Display**: Shows available time slots for the selected date and prevents double bookings.
- **Booking Management**: Allows users to create, view, and delete bookings.

## Project Structure

The project is split into two main parts:

### 1. Frontend (Next.js)

The frontend of the system is built using [Next.js](https://nextjs.org/) and handles the following:

- **Pages**: Displays the main calendar and booking form.
- **Components**: Reusable UI components like `CalendarView`.
- **API Calls**: Fetches available time slots and sends booking data to the backend.

### 2. Backend (Node.js with Express)

The backend is built using [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/) to handle:

- **GET /api/getAvailableTimes**: Fetch available time slots for a given date.
- **POST /api/createBooking**: Creates a new booking with user data.
- **DELETE /api/deleteBooking**: Deletes an existing booking by ID.
  
The backend uses an in-memory structure to simulate database functionality.

## Prerequisites

Ensure the following tools are installed on your machine:

- [Node.js](https://nodejs.org/) - The JavaScript runtime for running both frontend and backend
- [npm](https://www.npmjs.com/) - Node package manager

## Setup Instructions

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/restaurant-booking-system.git
    cd restaurant-booking-system
    ```

2. Navigate to the `frontend` directory and install dependencies:
    ```bash
    cd frontend
    npm install
    ```

3. Start the Next.js development server:
    ```bash
    npm run dev
    ```

4. Open the frontend in your browser at `http://localhost:3000`.

### Backend Setup

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Install the backend dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    node server.js
    ```

4. The backend will be running on `http://localhost:5000`.
