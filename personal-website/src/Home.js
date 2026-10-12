
import React from 'react';

function Home() {
  const headingColor = 'lightblue';

  function showEnthusiasm() {
    document.getElementById('home-message').innerText =
      'Hello from React! I love this page!';

    document.getElementById('home-heading').style.backgroundColor =
      headingColor;
  }

  return (
    <div className="container mt-4">
      <div className="card p-4 mb-4">
        <h1 id="home-heading">This is the Home Page</h1>
        <p id="home-message">
          Click the button to see my enthusiasm!
        </p>
        <button className="btn btn-primary" onClick={showEnthusiasm}>
          Show Enthusiasm
        </button>
      </div>
    </div>
  );
}

export default Home;
