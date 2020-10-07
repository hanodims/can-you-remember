import React , {useState} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

//components
import Home from "./components/Home";
import Difficulty from "./components/Difficulty";
import Game from "./components/Game";



function App() {
  const [mode, setMode] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const page = () => {
    if (difficulty) return <Game difficulty={difficulty} mode={mode} />;
    if (mode) return <Difficulty setDifficulty={setDifficulty} />;
    return <Home setMode={setMode} />;
  };
  return (
  <div className="App border my-5">
    <Container>
    {page()}
          <Button
          className="btn btn-danger mb-3"
          onClick={() => {
            setMode(null);
            setDifficulty(null);
          }}
        >
          Reset
        </Button>
    </Container>
  </div>
);
};

export default App;
