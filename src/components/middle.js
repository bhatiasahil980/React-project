import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Middle = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://mcmscache.epapr.in/post_images/website_350/post_24558985/full.jpg "
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://ncwwomenhelpline.in/front/images/ncw_banners_02.jpg"
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://pledge.mygov.in/janandolan-covid/assets/images/banner.jpg"
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr
        img
        style={{
          background: "#2bd7f1",
          color: "#2bd7f1",
          borderColor: "#2bd7f1",
          height: "50px",
        }}
      />
      
    
      <Container >
        <Row >
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://thecomputerwarriors.com/wp-content/uploads/2021/07/totemo_file-transfer3-800x600-q92.png"
              />
              <Card.Body>
                <a href="#">
                  <Button variant="primary">Transfer Initiate</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.wikihow.com/images/thumb/8/84/Write-Your-Own-Last-Will-and-Testament-Step-17-Version-4.jpg/v4-460px-Write-Your-Own-Last-Will-and-Testament-Step-17-Version-4.jpg"
              />
              <Card.Body>
                <a href="#">
                  <Button variant="primary">Create Will</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem", height: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://uploads-ssl.webflow.com/6340fe394585b48bda8e6cb0/63427b85e3265c6ec840ac33_admission-icons3-600x400-p-500.jpg"
              />
              <Card.Body>
                <a href="#">
                  <Button style={{ paddingtop: "100px" }} variant="primary">
                    Apply for Correction
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr
        img
        style={{
          background: "#2bd7f1",
          color: "#2bd7f1",
          borderColor: "#2bd7f1",
          height: "50px",
        }}
      />
        <Row>
        <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://thecomputerwarriors.com/wp-content/uploads/2021/07/totemo_file-transfer3-800x600-q92.png"
              />
              <Card.Body>
                <a href="#">
                  <Button variant="primary">Check records</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://thecomputerwarriors.com/wp-content/uploads/2021/07/totemo_file-transfer3-800x600-q92.png"
              />
              <Card.Body>
                <a href="#">
                  <Button variant="primary">Get certificate</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
};
export default Middle;
