import { createSlice } from "@reduxjs/toolkit";

const getCartFromStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItem: getCartFromStorage(),
  },

  reducers: {
    addToCart: (state, action) => {
      const newItem = {
        ...action.payload,
        cartId: Date.now() + Math.random(), // unique id per item
      };

      state.cartItem.push(newItem);

      localStorage.setItem(
        "cart",
        JSON.stringify(state.cartItem)
      );
    },

    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.cartId !== action.payload
      );

      localStorage.setItem(
        "cart",
        JSON.stringify(state.cartItem)
      );
    },

    clearCart: (state) => {
      state.cartItem = [];
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;