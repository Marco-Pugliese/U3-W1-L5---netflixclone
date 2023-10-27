import { Component } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";

class SettingPage extends Component {
  render() {
    return (
      <Container fluid className="my-bg">
        <Container className="w-50 mx-auto text-white pt-5">
          <h1 className="m-0 p-0 border-bottom">Edit Profile</h1>
          <Row className="mt-3 gx-2">
            <Col className="col-3">
              <img src="https://www.placedog.net/200" alt="" width={"100%"} />
            </Col>

            <Col>
              <Container className="border-bottom">
                <Button variant="secondary" className="rounded-0 w-100">
                  LOREMDOG
                </Button>
                <Container fluid className="fs-5 mt-4">
                  Language:
                </Container>
                <Container className="mb-4">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="transparent"
                      id="dropdown-basic"
                      className="border rounded-0 text-white"
                    >
                      English
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="bg-transparent">
                      <Dropdown.Item
                        className="bg-transparent border-bottom rounded-0 text-white"
                        href="#/action-1"
                      >
                        Italan
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="bg-transparent border-bottom rounded-0 text-white"
                        href="#/action-2"
                      >
                        Spanish
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="bg-transparent border-bottom rounded-0 text-white"
                        href="#/action-3"
                      >
                        Dutch
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Container>
              </Container>
              <Container className="py-4 border-bottom">
                <Container className="py-2">Maturity Settings:</Container>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
export default SettingPage;
