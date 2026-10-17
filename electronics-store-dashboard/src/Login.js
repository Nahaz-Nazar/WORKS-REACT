
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from './features/auth/authSlice';

const API_URL = 'https://worksheet-product.mashupstack.com';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      setLoading(true);

      const response = await axios.post(`${API_URL}/login`, {
        email: email.trim(),
        password,
      });

      const result = response.data?.data ?? response.data;
      const token =
        result?.token ??
        result?.access_token ??
        result?.accessToken;

      if (!token) {
        setError('Login response did not contain a token.');
        return;
      }

      dispatch(
        setCredentials({
          email: result.email || email.trim(),
          token,
        })
      );

      navigate('/products', { replace: true });
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.response?.data?.error ||
        'Login failed. Please check your email and password.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-container">
      <form className="auth-card" onSubmit={handleLogin}>
        <h1>Welcome Back</h1>
        <p className="subtitle">Login to view your store products.</p>

        {error && <p className="error">{error}</p>}

        <label htmlFor="loginEmail">Email</label>
        <input
          id="loginEmail"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="loginPassword">Password</label>
        <input
          id="loginPassword"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <p className="auth-link">
          New user? <Link to="/register">Register</Link>
        </p>
      </form>
    </main>
  );
}

export default Login;
