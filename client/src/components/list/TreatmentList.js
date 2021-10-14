import React, { useContext } from 'react';

// Context
import { TreatmentContext } from '../../context/TreatmentContext';

// Custom Components
import TreatmentCard from '../card/TreatmentCard';

const TreatmentList = () => {
  const { treatments } = useContext(TreatmentContext);

  return (
    <div>
      {treatments ? (
        treatments.map((data, index) => {
          return <TreatmentCard key={index} data={data} />;
        })
      ) : (
        <h3>No Treatments or Prescriptions provided by doctor.</h3>
      )}
    </div>
  );
};

export default TreatmentList;
