import React, { useState, useEffect } from "react"; //new import

// Data
import allCards from "../data";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';

// Utils
import { shuffle } from "../utils";

// Components
import Cards from "./Cards";

const Game = ({ difficulty }) => {
  const [cards, setCards] = useState([]);

  //Used to duplicate the amount of cards since we need two of each and shuffle them using the function defined at the top
  useEffect(() => {
    let cards = allCards;
    switch (difficulty) {
      case "easy":
        cards = allCards.slice(0, 6);
        break;
      case "medium":
        cards = allCards.slice(0, 8);
        break;
      default:
        break;
    }
    setCards(() => shuffle([...cards, ...cards]));
  }, [difficulty]); //1

  //Mapping through the array of cards and placing them in the card component
  const cardsGrid = cards.map((card, idx) => (
    <Cards key={`${card.id}-${idx}`} card={card} />
  ));

  return (
    <Container>
      <Row>
        <Col className=" col-9">
          <div className="row border">{cardsGrid}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Game;