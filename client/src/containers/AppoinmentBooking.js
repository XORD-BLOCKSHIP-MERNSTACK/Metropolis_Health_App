import React, { useState } from 'react';

// Custom Components
import Input from '../components/inputbox/Input';

const AppoinmentBooking = () => {
  const [appointmentId, setAppointmentId] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('Pending');

  const resetInputs = () => {
    setAppointmentId('');
    setDate('');
    setStatus('');
  };

  return (
    <div className='container'>
      <Input type='text' disabled={true} value={appointmentId} />
      <Input
        type='Date'
        placeholder='Enter Date'
        onChange={(e) => setDate(e.target.value)}
      />
      <Input type='text' placeholder='Status' value={status} disabled={true} />
      <button>Book Appointment</button>
    </div>
  );
};

export default AppoinmentBooking;
