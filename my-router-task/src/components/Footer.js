// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center p-3 mt-auto">
      <p>© {new Date().getFullYear()} My React App</p>
    </footer>
  );
};

export default Footer;
