import { Component } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";

class SettingPage extends Component {
  render() {
    return (
      <Container fluid className="my-bg">
        <Container className="w-50 mx-auto text-white pt-5">
          <h1 className="m-0 p-0 border-bottom">Edit Profile</h1>
          <Row className="mt-3 gx-2 border-bottom border-secondary">
            <Col className="col-4 offset-4 col-lg-3 offset-lg-0 mb-4">
              <img src="https://www.placedog.net/200" alt="" width={"100%"} />
            </Col>

            <Col>
              <Container className="border-bottom border-secondary">
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
              <Container fluid className="py-4 border-bottom border-secondary">
                <Container fluid className="py-2 pb-3">
                  Maturity Settings:
                </Container>
                <Button
                  variant="secondary"
                  className="border border-secondary text-light rounded-0 p-0 m-0"
                >
                  ALL MATURITY SETTING
                </Button>
                <div className="my-3">
                  Show titles of all maturity ratings for this profile.
                </div>
                <Button
                  variant="transparent"
                  className="text-secondary rounded-0 border border-secondary"
                >
                  EDIT
                </Button>
              </Container>
              <Container fluid className="my-3">
                <Container fluid className="mb-1">
                  Autoplay Controls
                </Container>
                <Container>
                  <div className="d-flex align-items-center">
                    <span className="border border-secondary d-inline-flex align-items-center justify-content-center">
                      <Check className="fs-3 p-0 m-0" />
                    </span>
                    <span className="ms-3 small">
                      Autoplay next episode in a series on all devices
                    </span>
                  </div>
                </Container>
                <Container>
                  <div className="d-flex align-items-center">
                    <span className="border border-secondary d-inline-flex align-items-center justify-content-center">
                      <Check className="fs-3 p-0 m-0" />
                    </span>
                    <span className="ms-3 small">
                      Autoplay previews while browsing on all devices
                    </span>
                  </div>
                </Container>
              </Container>
            </Col>
          </Row>
          <Row className="gx-2 d-flex flex-column d-lg-flex flex-lg-row">
            <Col className="col-12 col-lg-6 d-flex justify-content-center my-4 mb-2">
              <Button variant="light" className="rounded-0 w-50 mx-2 ">
                SAVE
              </Button>
              <Button
                variant="transparent"
                className="text-secondary rounded-0 border border-secondary w-50 mx-2"
              >
                CANCEL
              </Button>
            </Col>
            <Col>
              <Button
                variant="transparent"
                className="text-secondary rounded-0 border border-secondary w-100 my-4 mb-2"
              >
                DELETE PROFILE
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
export default SettingPage;
