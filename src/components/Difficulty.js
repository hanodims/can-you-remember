import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

const Difficulty = ({ setDifficulty }) => {
  return (
    <Container>
      <div className="jumbotron m-5">
        <div className="">
          <h1>Choose the difficulty</h1>
        </div>
        <div>
          <Button
            type="button"
            className="btn btn-success mb-3"
            onClick={() => setDifficulty("easy")} /* Setting the difficulty to Easy*/
          >
            Easy 4x3
          </Button>
        </div>
        <div>
          <Button
            type="button"
            className="btn btn-warning mb-3"
            onClick={() => setDifficulty("medium")} /* Setting the difficulty to Medium */
          >
            Medium 4x4
          </Button>
        </div>
        <div>
          <Button
            type="button"
            className="btn btn-danger "
            onClick={() => setDifficulty("hard")} /* Setting the difficulty to hard */
          >
            Hard 4x5
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Difficulty;