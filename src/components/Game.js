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
import Score from "./Score";



const Game = ({ mode, difficulty }) => {
  const [cards, setCards] = useState([]);
  //const [flippedCards, changeFlipped] = useState([]);

  let flippedCards = [];
  const changeFlipped = anArray => {
    flippedCards = anArray;
  }; //1

  const unflipCards = (unflip1, unflip2) => {
    setTimeout(() => {
      unflip1(false);
      unflip2(false);
    }, 1000);
  }; //2

  const checkFlipped = flippedObject => {
    changeFlipped([...flippedCards, flippedObject]);

    if (flippedCards.length === 2) {
      if (flippedCards[0].id !== flippedCards[1].id) {
        unflipCards(flippedCards[0].changeFlip, flippedCards[1].changeFlip);
        increaseFailed(failedFlips + 1); //To know which player's turn it is
        setPlayerTurn(!playerTurn); //To know which player's turn it is
      } 
      else {
        if (mode === "multi") {//To Store player score
          if (playerTurn) {
            setScore([(score[0] += 1), score[1]]); 
          } else {
            setScore([score[0], (score[1] += 1)]);
          }
        }
      }
      changeFlipped([]);
    }
  }; 

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
  }, [difficulty]); 

  //Mapping through the array of cards and placing them in the card component
  const cardsGrid = cards.map((card, idx) => (
    <Cards key={`${card.id}-${idx}`} card={card} checkFlipped={checkFlipped}/>
  ));
//----------------------------------------------
  //To Store player score and pass them
  const [score, setScore] = useState([0, 0]); 

  //To know which player's turn it is
  const [playerTurn, setPlayerTurn] = useState(true); 
  const [failedFlips, increaseFailed] = useState(0);
//----------------------------------------------
  return (
    <Container>
      <Row>
        <Col className=" col-9">
          <div className="row border mb-3">{cardsGrid}</div>
          </Col>
          <Score //7
          mode={mode}
          score={score}
          failedFlips={failedFlips}
          playerTurn={playerTurn}
        />
      </Row>
    </Container>
  );
};

export default Game;