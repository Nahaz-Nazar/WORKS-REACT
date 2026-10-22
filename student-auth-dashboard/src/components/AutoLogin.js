import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserFromStorage } from '../features/auth/authSlice';

function AutoLogin({ children }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('user');

      if (savedUser) {
        const user = JSON.parse(savedUser);

        if (user.email && user.token) {
          dispatch(setUserFromStorage(user));
        } else {
          localStorage.removeItem('user');
        }
      }
    } catch (error) {
      localStorage.removeItem('user');
    } finally {
      setChecked(true);
    }
  }, [dispatch]);

  if (!checked) {
    return <p>Loading...</p>;
  }

  return children;
}

export default AutoLogin;