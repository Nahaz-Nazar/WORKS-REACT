import React from 'react';
import { Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Register from './pages/Register';
import Login from './pages/Login';
import StudentList from './pages/Studentlist';
import ProtectedRoute from './components/ProtectedRoute';
import { logout } from './features/auth/authSlice';

function Navbar() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login', { replace: true });
  };

  return (
    <nav className="navbar">
      <Link className="brand" to={token ? '/' : '/login'}>
        Student Management
      </Link>

      <div className="nav-links">
        {!token ? (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            <Link to="/">Student List</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<StudentList />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
