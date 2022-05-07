import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className=" navbar me-auto">
        <Nav.Link  as ={Link} to = {'/'} href="#home">Home</Nav.Link>
       
       
        <Nav.Link as ={Link} to = {'/signIn'} href="#signIn">Sign In</Nav.Link>
        <Nav.Link as ={Link} to = {'/signup'} href="#signup">Sign Up</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;