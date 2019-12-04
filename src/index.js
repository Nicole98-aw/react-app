import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Header userName="Cocolii" />
//         <Greeting />
//       </div>
//     );
//   }
// }

// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <p>Welcome, {this.props.userName}!</p>
//       </header>
//     );
//   }
// }

// class Greeting extends React.Component {
//   render() {
//     const date = new Date();
//     const hours = date.getHours();
//     let timeOfDay;

//     if (hours < 12) {
//       timeOfDay = "morning";
//     } else if (hours >= 12 && hours < 17) {
//       timeOfDay = "afternoon";
//     } else {
//       timeOfDay = "night";
//     }
//     return <h2>Good {timeOfDay} to you, sir or madam!</h2>;
//   }
// }

ReactDOM.render(<App />, document.getElementById("root")); //App is the root component

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
