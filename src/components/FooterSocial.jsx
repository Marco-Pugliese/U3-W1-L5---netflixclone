import { Component } from "react";
import { Container } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

class FooterSocial extends Component {
  render() {
    return (
      <Container className=" w-50 mx-auto pt-5 pb-2 mx-2">
        <Facebook className="fs-5 text-secondary mx-2" />
        <Instagram className="fs-5 text-secondary mx-2" />
        <Twitter className="fs-5 text-secondary mx-2" />
        <Youtube className="fs-5 text-secondary mx-2" />
      </Container>
    );
  }
}
export default FooterSocial;
