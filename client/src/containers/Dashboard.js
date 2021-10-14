import React, { useState } from 'react';

// Custom Components
import AppointmentList from '../components/list/AppointmentList';
import DoctorList from '../components/list/DoctorList';
import TreatmentList from '../components/list/TreatmentList';

const Dashboard = () => {
  const [switchlist, setSwitchList] = useState('Appointments');

  const handleSwitching = (value) => {
    setSwitchList(value);
  };

  const type = 'patient';

  return (
    <div>
      {type === 'doctor' ? (
        <div className='container'>
          <div>
            <button onClick={() => handleSwitching('Appointments')}>
              Appointments
            </button>
            <button onClick={() => handleSwitching('Treatments')}>
              Treatments
            </button>
          </div>
          <div>
            {switchlist === 'Appointments' ? (
              <AppointmentList />
            ) : switchlist === 'Treatments' ? (
              <TreatmentList />
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : type === 'patient' ? (
        <div className='container'>
          <div>
            <button onClick={() => handleSwitching('Doctors')}>Doctors</button>
            <button onClick={() => handleSwitching('Appointments')}>
              Appointments
            </button>
          </div>
          <div>
            {switchlist === 'Doctors' ? (
              <DoctorList />
            ) : switchlist === 'Appointments' ? (
              <AppointmentList />
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : type === 'admin' ? (
        <div className='container'>
          <div>
            <button>Appointments</button>
            <button>Treatments</button>
            <button>Doctors</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dashboard;
