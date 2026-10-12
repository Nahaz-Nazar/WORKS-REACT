
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import AppRouter from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
