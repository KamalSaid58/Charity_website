import { ReactNode } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

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
  );
}

export default NavigationBar;
