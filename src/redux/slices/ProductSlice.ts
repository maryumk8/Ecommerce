import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/Products';

// Define the type for your state
interface ProductState {
  products: Product[];
}

// Function to safely parse localStorage data
const loadProductsFromStorage = (): Product[] => {
  try {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
  } catch (error) {
    console.error('Error parsing products from localStorage:', error);
    return []; // Return an empty array if there’s an error
  }
};

// Initialize state with data from localStorage if available
const initialState: ProductState = {
  products: loadProductsFromStorage(),
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
