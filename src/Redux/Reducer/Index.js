import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: "productCart",
    initialState: {
        cartItem: []
    },
    reducers : {
        addToCart: (state, action) => {
            const NewData = action.payload;
            state.cartItem.push(NewData)
        }

    }
})

export const {addToCart} = cart.actions;
export default cart.reducer