import React, { createContext, useState, useEffect } from 'react';

// DummyData
import { doctors } from '../data/dummydata';

// Creating Context
export const UserContext = createContext();
export const UserActionContext = createContext();

const UserContextProvider = (props) => {
  const [doctorList, setDoctorList] = useState(doctors);

  console.log('user Context', doctorList);

  return (
    <UserContext.Provider value={doctorList}>
      <UserActionContext.Provider>{props.children}</UserActionContext.Provider>
    </UserContext.Provider>
  );
};

export default UserContextProvider;
