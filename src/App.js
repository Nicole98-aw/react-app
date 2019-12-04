//App component is the entry point into the entire application
import React from "react";
import Product from "./Components/Product";
import productsData from "./Components/nschoolProduct";
import TodoItem from "./Components/TodoItem";
import todosData from "./Components/todoData";
// import logo from "./logo.svg";
// import "./App.css";

function App() {
  // const productsComponents = productsData.map(product => (
  //   <Product key={product.id} product={product} />
  // ));
  // return <div>{productsComponents}</div>;

  const todoItems = todosData.map(item => (
    <TodoItem key={item.id} item={item} />
  ));

  return <div>{todoItems}</div>;
}

export default App;
