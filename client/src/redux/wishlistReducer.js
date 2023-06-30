import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
   
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },

    reset: (state) => {
      state.products = [];
    },
  },
});

export const { addToWishlist, removeItem, reset } =
  wishListSlice.actions;

export default wishListSlice.reducer;
