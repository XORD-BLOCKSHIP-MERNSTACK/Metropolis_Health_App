import React, { createContext } from 'react';

// Creating Context
export const AppoinmentContext = createContext();
export const AppoinmentActionContext = createContext();

const AppoinmentContextProvider = (props) => {
  return (
    <AppoinmentContext.Provider>
      <AppoinmentActionContext.Provider>
        {props.children}
      </AppoinmentActionContext.Provider>
    </AppoinmentContext.Provider>
  );
};

export default AppoinmentContextProvider;
