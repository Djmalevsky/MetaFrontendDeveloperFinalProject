import React, { useState, useEffect } from 'react';

function BookingPage({ availableTimes, dispatch }) {
  const [name, setName] = useState('');
  const [reservationDate, setDate] = useState('');
  const [reservationTime, setTime] = useState('');
  const [numGuests, setNumGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (name && reservationDate && reservationTime && numGuests) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [name, reservationDate, reservationTime, numGuests]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
  };

  return (
    <div className="booking-page">
      <h2>Reserve a Table</h2>
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            placeholder="Enter name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="res-date">Choose date:</label>
          <input 
            type="date" 
            id="res-date" 
            value={reservationDate} 
            onChange={handleDateChange}
            required
          />
        </div>
        <div>
          <label htmlFor="res-time">Choose time:</label>
          <select 
            id="res-time"
            value={reservationTime} 
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="" disabled>Select a time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="guests">Number of guests:</label>
          <input 
            type="number" 
            placeholder="1" 
            min="1" 
            max="10" 
            id="guests"
            value={numGuests} 
            onChange={(e) => setNumGuests(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="occasion">Occasion:</label>
          <select 
            id="occasion"
            value={occasion} 
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="">Select occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Make Your reservation" disabled={!isFormValid} />
        </div>
      </form>
    </div>
  );
}

export default BookingPage;
