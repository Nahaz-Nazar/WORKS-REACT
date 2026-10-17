
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './features/auth/authSlice';
import { clearProducts } from './features/products/productSlice';

function Navbar() {
  const token = useSelector((state) => state.auth.token);
  const email = useSelector((state) => state.auth.email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearProducts());
    navigate('/login', { replace: true });
  };

  return (
    <nav className="navbar">
      <Link className="brand" to={token ? '/products' : '/login'}>
        Electro<span>Store</span>
      </Link>

      <div className="nav-right">
        {token ? (
          <>
            <span className="user-email">{email}</span>
            <button
              className="logout-button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="nav-register">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
