import { ReactNode } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";


function NavigationBar() {
  return (
    <Navbar className="bg-darkBeige" variant="dark" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#">Welcome</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Dashboard</Nav.Link>
            <Nav.Link href="#">Shortcuts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
