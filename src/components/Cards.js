import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
//Data
import cards from "../data";

// Card Back Image
import cardBack from "../images/CardBack.jpg";

function Cards() {
  return (
    <div className="App border my-5">
    <Container>
      <Row>
        {/* 1 */}
        <Col className="col-3 my-1">
          {/* 2 */}
          <img
            className="mx-auto"
            src={cardBack}
            //   used percentages instead of pixels to be responsive with the screen size
            height="100%"
            width="100%"
            key="back"
          />
          {/* 3 */}
        </Col>
      </Row>
    </Container>
  </div>
  );
  }
  
  export default Cards;