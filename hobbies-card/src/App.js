
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const name = "Nahaz";
  const age = 20;
  const isStudent = true;

  const favoriteHobbies = ["Reading", "Hiking", "Coding"];

  const headingColor = "lightblue";

  function showEnthusiasm() {
    document.getElementById("message").innerText =
      "Hello from React! I love my hobbies!";

    document.getElementById("heading").style.backgroundColor = headingColor;
  }

  // For loop
  const hobbyListForLoop = [];

  for (let i = 0; i < favoriteHobbies.length; i++) {
    hobbyListForLoop.push(
      <li key={i}>{favoriteHobbies[i]}</li>
    );
  }

  return (
    <div className="container py-5">

      {/* Heading */}
      <h1 id="heading" className="text-center p-3 mb-4">
        Personal Information and Hobbies
      </h1>

      {/* Personal Information Card */}
      <div className="card shadow mx-auto mb-4" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <h2 className="card-title">Personal Information</h2>

          <p>
            <strong>Name:</strong> {name}
          </p>

          <p>
            <strong>Age:</strong> {age}
          </p>

          <p>
            <strong>Student:</strong> {isStudent.toString()}
          </p>
        </div>
      </div>

      {/* For Loop Hobbies */}
      <div className="card shadow mx-auto mb-4" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <h3>Favorite Hobbies - For Loop</h3>

          <ul>
            {hobbyListForLoop}
          </ul>
        </div>
      </div>

      {/* Map Hobbies */}
      <div className="card shadow mx-auto mb-4" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <h3>Favorite Hobbies - map()</h3>

          <ul>
            {favoriteHobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Button and Message */}
      <div className="text-center">
        <button
          className="btn btn-primary"
          onClick={showEnthusiasm}
        >
          Show Enthusiasm
        </button>

        <p id="message" className="mt-3">
          Click the button to see my enthusiasm!
        </p>
      </div>

    </div>
  );
}

export default App;
