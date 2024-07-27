import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <>
      <Navbar sticky="top" expand="lg" className="mt-1 mb-4 mx-auto navStyle">
        <Container>
          <Navbar.Brand href="/#/">Money Theory</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#/">Home</Nav.Link>
              <Nav.Link href="/#/appointment">Appointment</Nav.Link>
              <Nav.Link href="/#/message">Message</Nav.Link>
              <Nav.Link href="/#/sponsor">Sponsors</Nav.Link>
              <Nav.Link href="/#/merch">Merch</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
