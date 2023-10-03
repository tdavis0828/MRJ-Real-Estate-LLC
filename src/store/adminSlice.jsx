import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};
export const adminSlice = createSlice({
  name: 'isLoggedIn',
  initialState,
  reducers: {
    setIsLoggedIn(state, { payload }) {
      state.isLoggedIn = payload;
    },
  },
});

export const { setIsLoggedIn } = adminSlice.actions;

export default adminSlice.reducer;
