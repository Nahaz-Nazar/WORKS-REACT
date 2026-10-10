
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState('Guest');
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    console.log(`User changed to ${userName}`);
  }, [userName]);

  return (
    <div className="profile-container">
      <h1>Welcome, {userName}!</h1>

      <button onClick={() => setUserName('Alice')}>
        Login as Alice
      </button>
    </div>
  );
}

export default App;
