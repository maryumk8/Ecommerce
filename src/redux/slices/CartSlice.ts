import { createSlice } from '@reduxjs/toolkit';

const loadCart = () => {
  try {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : []; // Ensure proper parsing of JSON string
  } catch (error) {
    console.error('Failed to parse cart from localStorage:', error);
    return []; // Return an empty array if there's an error
  }
};

const initialState = {
  cart: loadCart(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item: any) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        // Update quantity if item exists in cart
        state.cart[itemIndex].qty += 1;
      } else {
        // Add new item to cart with quantity 1
        const addQty = { ...action.payload, qty: 1 };
        state.cart = [...state.cart, addQty]; // Corrected assignment
      }

      // Update local storage
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
