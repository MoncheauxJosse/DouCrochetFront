import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart", 
    initialState: {
        cartItems: [],
        totalAmount: 0,
        totalCount: 0,
        status: "idle",
        error: null
    },
    reducers: {
        addCartProduct: {
            reducer: (state, action) => {
              console.log(action)
              let cartIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.detail._id,
              )
              if (cartIndex >= 0) {
                state.cartItems[cartIndex].quantity += 1
              } else {
                let tempProduct = { id:action.payload.detail._id, quantity: 1, quantityMax: action.payload.detail.quantity }
                state.cartItems.push(tempProduct)
              }
            },
        },
        increment: (state, action) => {
          let index = state.cartItems.findIndex(
            (item) => item.id === action.payload._id,
            )
            if(state.cartItems[index].quantity < state.cartItems[index].quantityMax){
              state.cartItems[index].quantity += 1
            }
        },
        decrement: (state, action) => {
          let index = state.cartItems.findIndex(
            (item) => item.id === action.payload._id,
          )
          if (state.cartItems[index].quantity <= 1) {
            state.cartItems[index].quantity = 1
          } else {
            state.cartItems[index].quantity -= 1
          }
          console.log(state.cartItems[index].quantity)
        },
    },
})

 const cartReducer = cartSlice.reducer
 export default cartReducer;
export const {addCartProduct, increment, decrement} = cartSlice.actions;