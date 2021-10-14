import React, { createContext, useState } from 'react';

// Creating Context
export const TreatmentContext = createContext();
export const TreatmentActionContext = createContext();

const TreatmentContextProvider = (props) => {
  const [treatments, setTreatments] = useState([]);

  return (
    <TreatmentContext.Provider value={treatments}>
      <TreatmentActionContext.Provider>
        {props.children}
      </TreatmentActionContext.Provider>
    </TreatmentContext.Provider>
  );
};

export default TreatmentContextProvider;
