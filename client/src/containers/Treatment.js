import React, { useState } from 'react';

// Custom Component
import Input from '../components/inputbox/Input';

const Treatment = () => {
  const [appointmentId, setAppointmentId] = useState('');
  const [treatment, setTreatment] = useState('');

  const resetInputs = () => {
    setAppointmentId('');
    setTreatment('');
  };

  return (
    <div className='container'>
      <Input type='text' disabled={true} value={appointmentId} />
      <textarea
        type='text'
        placeholder='Enter Treatment Regarding Appointment'
        onChange={(e) => setTreatment(e.target.value)}
      />
      <button>Provide Treatment</button>
    </div>
  );
};

export default Treatment;
