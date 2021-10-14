import React, { createContext, useState } from 'react';

// Creating Context
export const AppointmentContext = createContext();
export const AppointmentActionContext = createContext();

const AppointmentContextProvider = (props) => {
  const [appointments, setAppointments] = useState([]);

  return (
    <AppointmentContext.Provider value={appointments}>
      <AppointmentActionContext.Provider>
        {props.children}
      </AppointmentActionContext.Provider>
    </AppointmentContext.Provider>
  );
};

export default AppointmentContextProvider;
