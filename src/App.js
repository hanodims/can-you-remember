import React , {useState} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

//components
import Difficulty from "./components/Difficulty";
import Game from "./components/Game";



function App() {
  const [difficulty, setDifficulty] = useState(null);
  
  return (
  <div className="App border my-5">
  <Jumbotron className="mt-5 ml-5 mr-5">
    <h1>Can you remember?</h1>
    <div className="m-5">
    <p>
    <Button variant="primary">Single Player</Button>
    </p>
    <p>
      <Button variant="primary">Multi Player</Button>
    </p>
    </div>
  </Jumbotron>
  <Button className="justify-content-left mb-5" variant="primary">Rest</Button>
  <div className="App border my-5">
    <Container>
    {difficulty ? (
        <Game difficulty={difficulty} />
      ) : (
        <Difficulty setDifficulty={setDifficulty} />
      )}
    </Container>
  </div>
  

  </div> );
};

export default App;
