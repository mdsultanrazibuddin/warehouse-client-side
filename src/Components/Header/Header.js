import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand className='fs-1 fw-bold' >Book Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className=" navbar me-auto nav-button">
        
        <Nav.Link className='header-button'    as ={Link} to = {'/'} href="#home">Home</Nav.Link>
        <Nav.Link className='header-button'  as ={Link} to = {'/product'} href="#product">Inventory</Nav.Link>
        <Nav.Link className='header-button'  as ={Link} to = {'/Blog'} href="#product">Blog</Nav.Link>
       
       
        
        {
            user && <>
            <Nav.Link className='header-button'  as ={Link} to = {'/AddProduct'} href="#signup">Add</Nav.Link>
        <Nav.Link className='header-button'  as ={Link} to = {'/ManageProduct'} href="#signup">Manage</Nav.Link>
        <Nav.Link className='header-button'  as ={Link} to = {'/MyItem'} href="#signup">My-Items</Nav.Link>
            </>
        }

        {  
         user ?
         <button className='logout-button'onClick={handleSignOut}>SignOut</button>
         :
         <Nav.Link className='header-button'  as ={Link} to = {'/signIn'} href="#signIn">Sign In</Nav.Link>
                                            
                                            

                                            
                                    
         }
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;