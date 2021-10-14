import React from 'react';
// Styled Component
import { Card } from 'react-bootstrap';

const TreatmentCard = (props) => {
  const { appointmentId, treatment } = props;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Appointment Id : 7634698147987</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>Treatment</Card.Subtitle>
        <Card.Text href='#'>
          dshbfjb jhdcifhsdf dsdshfjhjsdfh hdjsjdhjkzhx jhcbjhbc dhcjzhxbcj
          hdcjhzxbcjb
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TreatmentCard;
