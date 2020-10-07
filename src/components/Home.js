import React from "react";
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'

const Home = ({ setMode }) => {
  return (
    <div className="container">
      <Jumbotron className="m-5">
        <h1 className="mb-5">Can you remember?</h1>
        <div>
          <Button
            type="button"
            className="btn btn-warning mb-3"
            onClick={() => setMode("single")}
          >
            Single Player
          </Button>
        </div>
        <div>
          <Button
            type="button"
            className="btn btn-info"
            onClick={() => setMode("multi")}
          >
            Multi Player
          </Button>
        </div>
      </Jumbotron>
    </div>
  );
};
export default Home;
