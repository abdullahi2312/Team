import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Reducer/Index";

const Store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default Store;