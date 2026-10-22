
import { createSlice } from '@reduxjs/toolkit';

const getSavedAuth = () => {
  try {
    const savedAuth = localStorage.getItem('auth');
    return savedAuth ? JSON.parse(savedAuth) : null;
  } catch {
    return null;
  }
};

const savedAuth = getSavedAuth();

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: savedAuth?.user || null,
    token: savedAuth?.token || ''
  },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;

      localStorage.setItem(
        'auth',
        JSON.stringify({
          user: state.user,
          token: state.token
        })
      );
    },
    logout: (state) => {
      state.user = null;
      state.token = '';
      localStorage.removeItem('auth');
    }
  }
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
