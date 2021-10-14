import React from 'react';
import AppointmentContextProvider from './AppointmentContext';
import TreatmentContextProvider from './TreatmentContext';
import UserContextProvider from './UserContext';

const ContextProvider = (props) => {
  return (
    <AppointmentContextProvider>
      <TreatmentContextProvider>
        <UserContextProvider>{props.children}</UserContextProvider>
      </TreatmentContextProvider>
    </AppointmentContextProvider>
  );
};

export default ContextProvider;
