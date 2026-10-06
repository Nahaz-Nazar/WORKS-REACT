import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import profileImage from "./images/profile.jpg";

function App() {
  const personName = "Nahaz";
  const description = "I am a React learner and a beginner web developer.";

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="profile-card text-center">

        <h1>{personName}</h1>

        <p>{description}</p>

        <img
          src={profileImage}
          alt="Internal Profile"
          className="img-fluid profile-image mb-3"
        />

        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
          alt="External Profile"
          className="img-fluid profile-image"
        />

      </div>
    </div>
  );
}

export default App;