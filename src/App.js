//App component is the entry point into the entire application
import React from "react";
// import Product from "./Components/Product";
// import productsData from "./Components/nschoolProduct";
// import TodoItem from "./Components/TodoItem";
// import todosData from "./Components/todoData";
// import logo from "./logo.svg";
// import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this); // bind inside constructor
  }

  handleClick() {
    //handle events within class. Any event that uses setState has to be bound inside the constructor
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    );
  }
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: todosData
//     };
//   }
//   render() {
// const todoItems = this.state.todos.map(item => (
//   <TodoItem key={item.id} item={item} />
// ));

// return <div>{todoItems}</div>;
//     return (
//       <div>
//         {this.state.todos.map(({ id, ...otherProps }) => (
//           <TodoItem key={id} {...otherProps} />
//         ))}
//       </div>
//     );
//   }
// }
// const productsComponents = productsData.map(product => (
//   <Product key={product.id} product={product} />
// ));
// return <div>{productsComponents}</div>;

/*--------------------------------------------------------*/
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: false
//     };
//   }
//   render() {
//     let logIndicator;
//     if (this.state.isLoggedIn === true) {
//       logIndicator = "in";
//     } else {
//       logIndicator = "out";
//     }
//     return <h2>You are currently logged {logIndicator}</h2>;
//   }
// }

/*-----------------------------------------------*/

export default App;
