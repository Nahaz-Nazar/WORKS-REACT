
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    user: null
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;

      localStorage.setItem(
        'user',
        JSON.stringify(action.payload)
      );
    },

    removeUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },

    setUserFromStorage: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const {
  setUser,
  removeUser,
  setUserFromStorage
} = authSlice.actions;

export default authSlice.reducer;
