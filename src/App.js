//App component is the entry point into the entire application
import React from "react";
import ContentCard from "./Components/ContentCard";
// import logo from "./logo.svg";
// import "./App.css";

function App() {
  return (
    <div className="contacts">
      <ContentCard
        name="Mr.Whiskerson"
        imgUrl="http://placekitten.com/300/200"
        phone="254 92281921"
        email="whiskersoncat.com"
      />

      <ContentCard
        name="Fluffykins"
        imgUrl="http://placekitten.com/400/200"
        phone="254 92281921"
        email="fluffykins.com"
      />

      <ContentCard
        name="Destroyer"
        imgUrl="http://placekitten.com/400/300"
        phone="254 92281921"
        email="destroyercat.com"
      />

      <ContentCard
        name="Felix"
        imgUrl="http://placekitten.com/200/100"
        phone="254 92281921"
        email="felixcat.com"
      />
    </div>
  );
}

export default App;
