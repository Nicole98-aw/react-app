import React from "react";

function Joke(props) {
  return (
    <div>
      <h2>Question: {props.question}</h2>
      <h2>Answer: {props.punchline}</h2>
      <br />
    </div>
  );
}

export default Joke;
