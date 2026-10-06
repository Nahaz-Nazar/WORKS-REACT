
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const favoriteFoods = ["Pizza", "Biriyani", "Burger"];

  const [message, setMessage] = useState(
    "Select a food that you love!"
  );

  function showFood(food) {
    setMessage(`I love ${food}!`);
  }

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="food-card">

        <h1>My Favorite Foods</h1>

        <ul>
          {favoriteFoods.map((food, index) => (
            <li key={index}>
              <span>{food}</span>

              <button
                className="btn btn-primary"
                onClick={() => showFood(food)}
              >
                Love
              </button>
            </li>
          ))}
        </ul>

        <p className="message">
          {message}
        </p>

      </div>
    </div>
  );
}

export default App;

