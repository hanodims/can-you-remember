import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
// Card Back Image
import cardBack from "../images/CardBack.jpg";


const Cards = ({ card, checkFlipped }) => {
  const [flipped, changeFlip] = useState(false);
  const handleFlip = () => {
    changeFlip(!flipped);
  };

    return (
      <Col className="col-3 my-1">
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <img
          className="mx-auto"
          src={cardBack}
          height="100%"
          width="100%"
          key="front"
          onClick={() => handleFlip()}
        />
        <img
          className="mx-auto"
          src={card.front}
          height="100%"
          width="100%"
          key="back"
          onClick={() => handleFlip()}
        />
      </ReactCardFlip>
      </Col>
    )};
  
  export default Cards;