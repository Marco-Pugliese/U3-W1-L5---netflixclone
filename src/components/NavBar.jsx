import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Bell, PersonCircle, Search } from "react-bootstrap-icons";

class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" className="my-bg px-2">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src="/assets/images/images.png" alt="" id="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-flex justify-content-between"
          >
            <Nav className="d-none d-lg-flex ">
              <Nav.Link href="#" className="text-white fw-bold">
                Home
              </Nav.Link>
              <Nav.Link href="#">TV-Shows</Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Recently Added</Nav.Link>
              <Nav.Link href="#">My List</Nav.Link>
            </Nav>
            <Nav className="d-none  d-lg-flex">
              <Nav.Link>
                <Search className="fs-5 text-white" />
              </Nav.Link>
              <Nav.Link className="text-white">KIDS</Nav.Link>
              <Nav.Link>
                <Bell className="fs-5 text-white" />
              </Nav.Link>
              <Nav.Link>
                <PersonCircle className="fs-5 text-white" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
