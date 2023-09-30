// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.items.push(newItem);
    },
    removeFromCart: (state, action) => {
      const itemToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== itemToRemove.id);
    },
    emptyCart:(state,action)=>{
        const a=[]
        state.items=a;
    }
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
