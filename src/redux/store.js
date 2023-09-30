// store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartslice'; // Import your cart slice

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add the cart reducer to your store
    // Add other reducers as needed
  },
});

export default store;
