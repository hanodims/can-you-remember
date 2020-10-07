import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

// Card Back Image
import cardBack from "../images/CardBack.jpg";

const Cards = ({ card }) => {
    return (
      <Col className="col-3 my-1">
      <img
        className="mx-auto"
        src={card.front}
        //   used percentages instead of pixels to be responsive with the screen size
        height="100%"
        width="100%"
        key="front"
      />
    </Col>
    )};
  
  export default Cards;