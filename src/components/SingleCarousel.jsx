import { Component } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

class SingleCarousel extends Component {
  state = {
    myArrayOfObjects: [],
  };
  componentDidMount = (props) => {
    fetch("http://www.omdbapi.com/?apikey=9b8cbbea&s=" + this.props.searchKey)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while getting the datas");
        }
      })
      .then((data) => {
        data.Search.map((singleData) => {
          return this.setState({
            ...this.state.myArrayOfObjects,
            myArrayOfObjects: data.Search,
          });
        });
      })
      .then(console.log(this.state.myArrayOfObjects))
      .catch((err) => {
        console.log("Error: ", err);
      });
  };
  render(props) {
    return (
      <Container fluid className="px-5 my-bg ">
        <Row className="pt-4 text-white">
          <h2 className="fs-4">{this.props.h2}</h2>
        </Row>

        <Row className="gx-2 px-5">
          {this.state.myArrayOfObjects
            .filter((myArrayOfObjects, i) => i < 5)
            .map((singlePoster) => (
              <Col className="d-none d-md-flex d-lg-none">
                <img
                  src={singlePoster.Poster}
                  alt="single-poster"
                  width={"100%"}
                />
              </Col>
            ))}
        </Row>
        <Row className="gx-2 px-5">
          {this.state.myArrayOfObjects
            .filter((myArrayOfObjects, i) => i < 6)
            .map((singlePoster) => (
              <Col className="d-none d-lg-flex d-xl-none">
                <img
                  src={singlePoster.Poster}
                  alt="single-poster"
                  width={"100%"}
                />
              </Col>
            ))}
        </Row>
        <Row className="gx-2 px-5">
          {this.state.myArrayOfObjects
            .filter((myArrayOfObjects, i) => i < 8)
            .map((singlePoster) => (
              <Col className="d-none d-xl-flex d-xxl-none">
                <img
                  src={singlePoster.Poster}
                  alt="single-poster"
                  width={"100%"}
                />
              </Col>
            ))}
        </Row>
        <Row className="gx-2 px-5">
          {this.state.myArrayOfObjects
            .filter((myArrayOfObjects, i) => i < 10)
            .map((singlePoster) => (
              <Col className="d-none d-xxl-flex">
                <img
                  src={singlePoster.Poster}
                  alt="single-poster"
                  width={"100%"}
                />
              </Col>
            ))}
        </Row>
        <Row className="gx-2 px-5">
          <Carousel className="d-sm-none">
            {this.state.myArrayOfObjects
              .filter((myArrayOfObjects, i) => i < 10)
              .map((singlePoster) => (
                <Carousel.Item>
                  <img
                    src={singlePoster.Poster}
                    alt="single-poster"
                    width={"100%"}
                  />
                </Carousel.Item>
              ))}
          </Carousel>
        </Row>
        <Row className="gx-2 px-5">
          <Col>
            <Carousel className="d-none d-sm-block d-md-none">
              {this.state.myArrayOfObjects
                .filter((myArrayOfObjects, i) => i > 5 && i < 11)
                .map((singlePoster) => (
                  <Carousel.Item>
                    <img
                      src={singlePoster.Poster}
                      alt="single-poster"
                      width={"100%"}
                    />
                  </Carousel.Item>
                ))}
            </Carousel>
          </Col>
          <Col>
            <Carousel className="d-none d-sm-block d-md-none">
              {this.state.myArrayOfObjects
                .filter((myArrayOfObjects, i) => i < 5)
                .map((singlePoster) => (
                  <Carousel.Item>
                    <img
                      src={singlePoster.Poster}
                      alt="single-poster"
                      width={"100%"}
                    />
                  </Carousel.Item>
                ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default SingleCarousel;
