import React from 'react';
// Styled Component
import { Card } from 'react-bootstrap';

const AppoinmentCard = (props) => {
  const { patientID, doctorID, time, status } = props;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Patient Id : 7634698147987</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          Patient Name : Ayesha Ghani
        </Card.Subtitle>
        <Card.Title>Date : 12-March-20</Card.Title>
        <Card.Subtitle href='#'>Doctor Id : 7634698147987</Card.Subtitle>
        <Card.Subtitle href='#'> Doctor Name : Rehman</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default AppoinmentCard;
