import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 12) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return <h1>Good {timeOfDay}!</h1>;
}
ReactDOM.render(<App />, document.getElementById("root")); //App is the root component

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
