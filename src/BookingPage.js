import React from 'react';

function BookingPage() {
  return (
    <div className="booking-page">
      <h2>Reserve a Table</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" />
        </div>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
}

export default BookingPage;
