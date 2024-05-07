import React from 'react';
import './NavigationBar.css'; // Import CSS file for styling

<<<<<<< HEAD
function NavigationBar({ text, children }) {
  return (
    <Navbar className="bg-darkBeige" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand href="#">Welcome</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">{text}</Nav.Link>
            {children}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
=======
const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="container">
        
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/AboutUs">About</a></li>
          <li><a href="/donate">Donate</a></li>
          <li><a href="/ContactUs">Contact</a></li>
        </ul>
      </div>
    </nav>
>>>>>>> 46e44e0a40ee114b0ed1f30019cc4c701fefc68f
  );
}

export default NavigationBar;
