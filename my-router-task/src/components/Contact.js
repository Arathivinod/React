// Contact.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="mt-5">
      <h2>Contact Us</h2>
      <p>
        Have questions or feedback? Reach out to us using the contact form below.
      </p>

      <Form>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Control as="textarea" rows={3} placeholder="Type your message here" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
