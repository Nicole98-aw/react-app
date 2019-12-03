//App component is the entry point into the entire application
import React from "react";
import Product from "./Components/Product";
import productsData from "./Components/nschoolProduct";
// import logo from "./logo.svg";
// import "./App.css";

function App() {
  const productsComponents = productsData.map(product => (
    <Product key={product.id} product={product} />
  ));
  return <div>{productsComponents}</div>;
}

export default App;
