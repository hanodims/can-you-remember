import React from "react";
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

//components
import Cards from "./components/Cards";

function App() {
  return <div className="App border my-5">
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
  <Cards />

  </div>;
}

export default App;
