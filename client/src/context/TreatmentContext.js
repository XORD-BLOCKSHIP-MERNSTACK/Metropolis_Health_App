import React, { createContext } from 'react';

// Creating Context
export const TreatmentContext = createContext();
export const TreatmentActionContext = createContext();

const TreatmentContextProvider = (props) => {
  return (
    <TreatmentContext.Provider>
      <TreatmentActionContext.Provider>
        {props.children}
      </TreatmentActionContext.Provider>
    </TreatmentContext.Provider>
  );
};

export default TreatmentContextProvider;
