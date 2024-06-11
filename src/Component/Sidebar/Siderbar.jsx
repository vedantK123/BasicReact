import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Siderbar = () => {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='me-auto'>
          <Nav className="me-auto">
            <Link  to="Home" className='px-2'>Home</Link>
            <Link to="About" className='px-2'>About</Link>
            <Link to="Contact" className='px-2'>Contact</Link>
          </Nav>
          <button className='btn'>
            <Link to="/">LogOut</Link>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Siderbar
