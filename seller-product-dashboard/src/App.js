
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import ProductList from './ProductList';
import ViewProduct from './ViewProduct';
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={token ? <ProductList /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/product/:id"
          element={token ? <ViewProduct /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
