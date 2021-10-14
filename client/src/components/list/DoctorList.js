import React, { useContext } from 'react';

// Context
import { UserContext } from '../../context/UserContext';

// Custom Components
import DoctorInfoCard from '../card/DoctorInfoCard';

const DoctorList = () => {
  const { doctorList } = useContext(UserContext);

  return (
    <div>
      {doctorList ? (
        doctorList.map((data, index) => {
          <DoctorInfoCard key={index} data={data} />;
        })
      ) : (
        <h3>No Active Doctors</h3>
      )}
    </div>
  );
};

export default DoctorList;
