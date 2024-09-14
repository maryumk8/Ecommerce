import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/Products';

// Define the type for your state
interface ProductState {
  products: Product[]; // Replace `any` with the appropriate type for your products
}

// Initialize state with data from localStorage if available
const initialState: ProductState = {
  products: JSON.parse(localStorage.getItem('products') || '[]'),
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      localStorage.setItem('products', JSON.stringify(state.products));
    },
  },
});

// Export actions
export const { setProducts } = productSlice.actions;

// Export the reducer
export default productSlice.reducer;
