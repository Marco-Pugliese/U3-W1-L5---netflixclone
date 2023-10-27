import { Component } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

class FooterCopyright extends Component {
  render() {
    return (
      <Container className="w-50 mx-auto d-block d-lg-flex ">
        <Row className="gx-5 pe-5">
          <Col className="col-12 col-md-6 d-flex w-50 flex-row justify-content-between">
            <ListGroup className="m-0 p-0">
              <ListGroup.Item className="bg-transparent border-0 text-secondary smaller mx-0 p-0 my-1">
                Audio and Subtitles
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 text-secondary smaller mx-0 p-0 my-1">
                Media Center
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 text-secondary smaller mx-0 p-0 my-1">
                Privacy
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 text-secondary smaller mx-0 p-0 my-1">
                Contact Us
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className="col-12 col-md-6 d-flex flex-row justify-content-between">
            <ListGroup className="m-0 p-0">
              <ListGroup.Item className="bg-transparent border-0 text-secondary smaller mx-0 p-0 my-1">
                Audio Description
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 text-secondary smaller mx-0 p-0 my-1">
                Investor Relations
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 text-secondary smaller mx-0 p-0 my-1">
                Legal Notices
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row className="gx-5 pe-5">
          <Col className="col-12 col-md-6 d-flex justify-content-between">
            <ListGroup className="m-0 p-0">
              <ListGroup.Item className="bg-transparent border-0 text-secondary smaller mx-0 p-0 my-1">
                Help Center
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 text-secondary smaller mx-0 p-0 my-1">
                Jobs
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 text-secondary smaller mx-0 p-0 my-1">
                Cookie Preferences
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className="col-12 col-md-6 d-flex justify-content-between">
            <ListGroup className="m-0 p-0">
              <ListGroup.Item className="bg-transparent border-0 text-secondary smaller mx-0 p-0 my-1">
                Gift Cards
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 text-secondary smaller mx-0 p-0 my-1">
                Terms of Use
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 text-secondary smaller mx-0 p-0 my-1">
                Corporate Information
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default FooterCopyright;
