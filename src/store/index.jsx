import { configureStore } from '@reduxjs/toolkit';
import adminSlice from './adminSlice';

const store = configureStore({
  reducer: {
    navbar: adminSlice,
  },
});

export default store;
