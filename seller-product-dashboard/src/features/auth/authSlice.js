
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    token: '',
  },
  reducers: {
    setCredentials: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.email = '';
      state.token = '';
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
