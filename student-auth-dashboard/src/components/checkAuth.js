import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function checkAuth(Component) {
  function ProtectedComponent(props) {
    const user = useSelector((state) => state.auth.user);

    if (!user || !user.token) {
      return <Navigate to="/login" replace />;
    }

    return <Component {...props} />;
  }

  return ProtectedComponent;
}

export default checkAuth;