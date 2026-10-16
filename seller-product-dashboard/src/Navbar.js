
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './features/auth/authSlice';
import { clearProducts } from './features/products/productSlice';

function Navbar() {
  const { token, email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearProducts());
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link className="brand" to={token ? '/products' : '/register'}>
        Seller Dashboard
      </Link>

      <div className="nav-links">
        {!token ? (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            <Link to="/products">Products</Link>
            <span className="nav-email">{email}</span>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
