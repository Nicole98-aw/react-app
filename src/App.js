//App component is the entry point into the entire application
import React from "react";
import Joke from "./Components/Joke.js";
// import logo from "./logo.svg";
// import "./App.css";

function App() {
  return (
    <div className="contacts">
      <Joke
        question="What's the best thing about Switzerland?"
        punchline="I don't know,but the flag is a big plus!"
      />
      <Joke
        question="Did you hear about the Mathematician who's afraid of big numbers?"
        punchline="He'll stop at nothing to avoid them"
      />
      <Joke
        question="Heard about the new restaurant called Karma?"
        punchline="There's no menu! You get what you deserve."
      />
      <Joke
        question="Did you hear about the actor who fell through the floorboards?"
        punchline="He was just going through a stage."
      />
      <Joke
        question="Would you like to know how to code?"
        punchline="Yes I would."
      />
    </div>
  );
}

export default App;
