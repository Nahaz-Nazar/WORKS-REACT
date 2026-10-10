
import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    console.log("Welcome message displayed.");
  }, []);

  return (
    <div className="welcome-container">
      <h1>Hello, user! Welcome to our site.</h1>
    </div>
  );
}

export default App;
