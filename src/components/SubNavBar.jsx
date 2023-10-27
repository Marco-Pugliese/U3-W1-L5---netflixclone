import { Component } from "react";
import { Container, Dropdown } from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

class SubNavBar extends Component {
  render() {
    return (
      <Container
        fluid
        className="my-bg px-5 text-white d-flex justify-content-between"
      >
        <div className="d-flex">
          <h2 className="me-3">TV Shows</h2>
          <Dropdown className="ms-5">
            <Dropdown.Toggle
              id="dropdown-basic"
              className="border border-white bg-transparent rounded-0  py-1 px-2"
            >
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Thriller</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Romance</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Grid className="fs-5 mx-3 text-white" />
          <Grid3x3 className="fs-5 mx-3 text-white" />
        </div>
      </Container>
    );
  }
}

export default SubNavBar;
