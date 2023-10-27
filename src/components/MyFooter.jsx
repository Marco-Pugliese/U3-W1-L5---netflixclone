import { Component } from "react";
import FooterSocial from "./FooterSocial";
import FooterCopyright from "./FooterCopyright";
import { Container } from "react-bootstrap";
import FooterCode from "./FooterCode";

class MyFooter extends Component {
  render() {
    return (
      <Container fluid className="my-bg pt-5">
        <FooterSocial />
        <FooterCopyright />
        <FooterCode />
      </Container>
    );
  }
}

export default MyFooter;
