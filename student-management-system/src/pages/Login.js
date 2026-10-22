import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/auth/authSlice';

const API_URL = 'https://worksheet-student.mashupstack.com';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: formData.email.trim(),
        password: formData.password
      });

      const data = response.data;

      const token =
        data.token ||
        data.access_token ||
        data.access ||
        data.auth_token ||
        data.data?.token ||
        data.data?.access_token;

      if (!token) {
        setError(
          'Login response did not contain a token. Check the API response.'
        );
        console.error('Login API response:', data);
        return;
      }

      const user =
        data.user ||
        data.data?.user || {
          user_name: data.user_name || '',
          email: data.email || formData.email
        };

      dispatch(setCredentials({ user, token }));

      navigate('/', { replace: true });
    } catch (err) {
      setError(
        err.response?.data?.message ||
        'Login failed. Please check your email and password.'
      );
      console.error('Login error:', err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h1>Login</h1>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <p>
        New user? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
