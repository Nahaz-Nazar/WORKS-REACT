import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import internalImage from "./images/welcome.jpg";

function App() {
  const userName = "Nahaz";

  console.log("React app started");

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      
      <div className="card shadow p-4 text-center" style={{ width: "500px" }}>

        <h1
          style={{
            color: "darkblue",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Welcome to React Learning, {userName}
        </h1>

        {/* Internal Image */}
        <div className="mb-3">
          <img
            src={internalImage}
            alt="Internal"
            className="img-fluid rounded"
            style={{ width: "200px" }}
          />
        </div>

        {/* External Image */}
        <div className="mb-3">
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500"
            alt="React Learning"
            className="img-fluid rounded"
          />
        </div>

        {/* Description */}
        <p className="text-muted fs-5">
          This is your first card with images and styles!
        </p>

      </div>
    </div>
  );
}

export default App;