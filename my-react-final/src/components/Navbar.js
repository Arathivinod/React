// Navbar.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Medi-mom
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/consultation">
              Consultation
            </Nav.Link>
        
            <Nav.Link as={NavLink} to="/buy-medicines">
              Buy Medicines
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Button as={NavLink} to="/login" variant="dark">
              Login
            </Button>
            <Button as={NavLink} to="/signup" variant="primary" className="ms-2">
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
