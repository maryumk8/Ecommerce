// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/UserSlice';
import productSlice from './slices/ProductSlice';
import cartSlice from './slices/CartSlice';

const store = configureStore({
  reducer: {
    userSlice,
    productSlice,
    cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
