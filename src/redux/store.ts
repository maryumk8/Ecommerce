// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/UserSlice';
import productSlice from './slices/ProductSlice';

const store = configureStore({
  reducer: {
    userSlice,
    productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
