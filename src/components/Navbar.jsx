import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <>
      <Navbar sticky="top" expand="lg" className="mt-1 mb-4 mx-auto navStyle">
        <Container>
          <Navbar.Brand href="#">MT Consulting</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/MT-Consulting/#/">Home</Nav.Link>
              <Nav.Link href="/MT-Consulting/#/services">Services</Nav.Link>
              <Nav.Link href="/MT-Consulting/#/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
