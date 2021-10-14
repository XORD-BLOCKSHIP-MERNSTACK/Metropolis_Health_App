import React from 'react';
import AppoinmentContextProvider from './AppoinmentContext';
import TreatmentContextProvider from './TreatmentContext';
import UserContextProvider from './UserContext';

const ContextProvider = (props) => {
  return (
    <AppoinmentContextProvider>
      <TreatmentContextProvider>
        <UserContextProvider>{props.children}</UserContextProvider>
      </TreatmentContextProvider>
    </AppoinmentContextProvider>
  );
};

export default ContextProvider;
