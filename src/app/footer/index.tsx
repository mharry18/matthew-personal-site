import React from 'react';
import Container from 'react-bootstrap/Container';
import './index.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <p className="mb-0 text-center">
          All rights reserved &#169; 2024 Matthew Harry
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
