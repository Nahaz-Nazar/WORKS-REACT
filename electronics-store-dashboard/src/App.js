
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Register from './Register';
import Login from './Login';
import ProductList from './ProductList';
import Navbar from './Navbar';
import './App.css';

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to={token ? '/products' : '/login'}
              replace
            />
          }
        />

        <Route path="/register" element={<Register />} />

        <Route
          path="/login"
          element={
            token
              ? <Navigate to="/products" replace />
              : <Login />
          }
        />

        <Route path="/products" element={<ProductList />} />

        <Route
          path="*"
          element={
            <Navigate
              to={token ? '/products' : '/login'}
              replace
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
