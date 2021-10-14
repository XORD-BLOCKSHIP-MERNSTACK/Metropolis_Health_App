import React, { useContext } from 'react';

// Context
import { AppointmentContext } from '../../context/AppointmentContext';

// Custom Components
import AppointmentCard from '../card/AppointmentCard';

const AppointmentList = () => {
  const { appointments } = useContext(AppointmentContext);

  return (
    <div>
      {appointments ? (
        appointments.map((data, index) => {
          <AppointmentCard key={index} data={data} />;
        })
      ) : (
        <h3>No Appointment Bookings</h3>
      )}
    </div>
  );
};

export default AppointmentList;
