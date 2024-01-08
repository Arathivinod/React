
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-5 py-3 bg-dark text-light text-center">
      <p>&copy; {new Date().getFullYear()} Medi-mom</p>
    </footer>
    
  );
};

export default Footer;
