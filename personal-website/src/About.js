
import React from 'react';

function About() {
  const headingColor = 'lightblue';

  function showEnthusiasm() {
    document.getElementById('about-message').innerText =
      'Hello from React! I love this page!';

    document.getElementById('about-heading').style.backgroundColor =
      headingColor;
  }

  return (
    <div className="container mt-4">
      <div className="card p-4 mb-4">
        <h1 id="about-heading">This is the About Page</h1>
        <p id="about-message">
          Click the button to see my enthusiasm!
        </p>
        <button className="btn btn-primary" onClick={showEnthusiasm}>
          Show Enthusiasm
        </button>
      </div>
    </div>
  );
}

export default About;
