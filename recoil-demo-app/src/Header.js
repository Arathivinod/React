// src/Header.js
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#">Skill Selector App</Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
