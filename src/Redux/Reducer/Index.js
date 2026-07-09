import { createSlice } from "@reduxjs/toolkit";


const getCartFromStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};



const cartSlice = createSlice({

  name:"cart",

  initialState:{
    cartItem:getCartFromStorage()
  },


  reducers:{


    addToCart:(state,action)=>{


      const item = state.cartItem.find(
        product => product.id === action.payload.id
      );


      if(item){

        item.quantity += 1;

      }

      else{

        state.cartItem.push({

          id:action.payload.id,

          name:action.payload.name,

          price:action.payload.price,

          image:action.payload.image,

          quantity:1,

          cartId:Date.now()

        });

      }



      localStorage.setItem(
        "cart",
        JSON.stringify(state.cartItem)
      );

    },




    removeFromCart:(state,action)=>{


      state.cartItem =
      state.cartItem.filter(
        item=>item.cartId !== action.payload
      );


      localStorage.setItem(
        "cart",
        JSON.stringify(state.cartItem)
      );


    },





    increaseQuantity:(state,action)=>{


      const item =
      state.cartItem.find(
        item=>item.cartId === action.payload
      );


      if(item){

        item.quantity++;

      }



      localStorage.setItem(
        "cart",
        JSON.stringify(state.cartItem)
      );


    },





    decreaseQuantity:(state,action)=>{


      const item =
      state.cartItem.find(
        item=>item.cartId === action.payload
      );


      if(item && item.quantity > 1){

        item.quantity--;

      }



      localStorage.setItem(
        "cart",
        JSON.stringify(state.cartItem)
      );


    },






    clearCart:(state)=>{


      state.cartItem=[];

      localStorage.removeItem("cart");


    }


  }


});




export const {
 addToCart,
 removeFromCart,
 increaseQuantity,
 decreaseQuantity,
 clearCart
}=cartSlice.actions;



export default cartSlice.reducer;