import React from 'react';
// Styled Component
import { Card } from 'react-bootstrap';

const DoctorInfoCard = (props) => {
  //   const { doctor } = props.data;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> Doctor : Ayesha Ghani</Card.Title>
        <Card.Subtitle href='#'>Id : 7634698147987</Card.Subtitle>
        <Card.Subtitle href='#'>Email : 7634698147987</Card.Subtitle>
        <Card.Subtitle href='#'>Status : Active </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default DoctorInfoCard;
