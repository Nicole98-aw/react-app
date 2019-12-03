//App component is the entry point into the entire application
import React from "react";
import Joke from "./Components/Joke.js";
import jokesData from "./Components/JokesData";
// import logo from "./logo.svg";
// import "./App.css";

function App() {
  const jokeComponents = jokesData.map(joke => (
    <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
  ));

  return <div>{jokeComponents}</div>;
}

export default App;
