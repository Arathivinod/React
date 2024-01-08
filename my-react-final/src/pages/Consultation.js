// Consultation.js
import React from 'react';
import { Container, Col, Row, Card, Carousel } from 'react-bootstrap';

const Consultation = () => (
  <Container className="py-5">
    <h2 className="mb-4">Consultation Services</h2>
    <Carousel className="mb-4">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-vector/psychologist-woman-man-patient-psychology-therapy-session-treatment-stress-addictions-mental-problems-psychotherapy-practice-psychological-help-psychiatrist-consulting_458444-165.jpg?size=626&ext=jpg&ga=GA1.1.1653261230.1700459901&semt=ais.com/carousel-image1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/world-diabetes-day-doctor-holding-patient-hand-s_1150-26698.jpg?size=626&ext=jpg&ga=GA1.1.1653261230.1700459901&semt=sph-image2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/doctor-holding-red-heart_38810-6746.jpg?size=626&ext=jpg&ga=GA1.1.1653261230.1700459901&semt=aise.com/carousel-image3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <p>
  In our consultation services, we strive to provide comprehensive and accessible healthcare solutions to meet 
  your individual needs. Our team of experienced healthcare professionals is dedicated to delivering high-quality 
  virtual consultations, ensuring you can receive medical advice and support from the comfort of your home. 
  Whether you're seeking expert opinions, medical guidance, or personalized treatment plans, our platform offers 
  a range of services to cater to your health and wellness requirements.

  Explore our six distinct consultation services:
</p>

    {/* Grid of images in cards */}
    <Row className="mt-4">
      {/* First Row */}
      <Col md={4} className="mb-4">
        <Card className="border-0">
          <Card.Img
            src="https://cdn-icons-png.flaticon.com/128/4422/4422854.png"
            alt="Consultation Service 1"
          />
          <Card.Body>
            <Card.Title>Video consultations</Card.Title>
           
          </Card.Body>
        </Card >
      </Col>
      <Col md={4} className="mb-4">
        <Card className="border-0">
          <Card.Img
            src="https://cdn-icons-png.flaticon.com/128/3595/3595970.png"
            alt="Consultation Service 2"
          />
          <Card.Body>
            <Card.Title>Online prescriptions</Card.Title>
           
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="mb-4">
        <Card className="border-0">
          <Card.Img
            src="https://cdn-icons-png.flaticon.com/128/9599/9599564.png"
            alt="Consultation Service 3"
          />
          <Card.Body>
            <Card.Title>Ordering and scheduling lab tests</Card.Title>
            
          </Card.Body>
        </Card>
      </Col>
      {/* Second Row */}
      <Col md={4} className="mb-4">
        <Card className="border-0">
          <Card.Img
            src="https://cdn-icons-png.flaticon.com/128/5316/5316703.png"
            alt="Consultation Service 4"
          />
          <Card.Body>
            <Card.Title>Health Monitoring and Tracking</Card.Title>
        
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="mb-4">
        <Card className="border-0">
          <Card.Img
            src="https://cdn-icons-png.flaticon.com/128/5965/5965170.png"
            alt="Consultation Service 5"
          />
          <Card.Body>
            <Card.Title>Personalized Health Information</Card.Title>
           
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="mb-4">
        <Card className="border-0">
          <Card.Img
            src="https://cdn-icons-png.flaticon.com/128/10496/10496531.png"
            alt="Consultation Service 6"
          />
          <Card.Body>
            <Card.Title>Insurance management</Card.Title>
            
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Consultation;
