import { Component } from "react";
import NavBar from "./NavBar";
import SubNavBar from "./SubNavBar";

class MyHeader extends Component {
  render() {
    return (
      <>
        <NavBar />
        <SubNavBar />
      </>
    );
  }
}
export default MyHeader;
