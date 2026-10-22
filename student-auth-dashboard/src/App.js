
import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/Register';
import StudentList from './pages/StudentList';
import checkAuth from './components/checkAuth';

const ProtectedStudentList = checkAuth(StudentList);

function App() {
  return (
    <>
      <nav className="navbar">
        <Link className="brand" to="/">
          Student Management
        </Link>

        <div className="nav-links">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/"
          element={<ProtectedStudentList />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
