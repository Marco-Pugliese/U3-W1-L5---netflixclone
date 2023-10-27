import { Component } from "react";
import SingleCarousel from "./SingleCarousel";

class MyBody extends Component {
  render() {
    return (
      <>
        <SingleCarousel h2="Get Ready for X-Mas" searchKey="christmas" />
        <SingleCarousel
          h2="Will be removed this Jan 1st"
          searchKey="harry potter"
          id="warning"
        />
        <SingleCarousel
          h2="Start now the Peter Jackson famous Saga from J.R.R. Tolkien Books"
          searchKey="lord of the rings"
        />
        <SingleCarousel h2="Get into The Matrix now" searchKey="matrix" />
      </>
    );
  }
}

export default MyBody;
