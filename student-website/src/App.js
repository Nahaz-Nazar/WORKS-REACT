
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate
} from 'react-router-dom';
import './App.css';

const students = ['Alexa', 'Alexai', 'Riya', 'Rahul'];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Student List</h1>

      {students.map((student) => (
        <p key={student}>
          <Link to={`/student/${student}`}>
            {student}
          </Link>
        </p>
      ))}

      <button onClick={() => navigate('/student/Riya')}>
        Go to Riya
      </button>
    </div>
  );
}

function Student() {
  const { name } = useParams();

  return (
    <div className="container">
      <h1>Welcome, {name}!</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:name" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
