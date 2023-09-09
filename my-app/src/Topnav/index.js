import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './index.scss'
  
const Topnav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>Sorting Algorithms</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </Navbar>
  );
};
  
export default Topnav;