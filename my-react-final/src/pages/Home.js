// src/pages/Home.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          {/* Image column */}
          <Card className="h-100">
            <Card.Img
              src="https://thumbs.dreamstime.com/b/female-doctor-talks-to-senior-female-patient-hospital-bed-67526392.jpg"
              alt="Doctor and patient"
              className="h-100"
            />
          </Card>
        </Col>
        <Col md={6}>
          {/* Description column */}
          <Card className="h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="mb-4">Welcome to Our Online Medical Platform</Card.Title>
              <Card.Text className="flex-grow-1" style={{ fontSize: '1.2rem' }}>
                Experience the future of healthcare with our online medical platform. Connect with experienced
                healthcare professionals from the comfort of your home.
              </Card.Text>
              <Card.Text className="flex-grow-1" style={{ fontSize: '1.2rem' }}>
                Whether you need a virtual consultation, access to medical records, or a convenient way to buy
                medicines, we've got you covered. Your health is our priority.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
