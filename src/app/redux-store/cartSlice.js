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
                let tempProduct = { id:action.payload.detail._id, quantity: 1 }
                state.cartItems.push(tempProduct)
              }
            },
        },
        increment: (state, action) => {
          let index = state.cartItems.findIndex(
            (item) => item.id === action.payload,
            )
            console.log(index)
          state.cartItems[index].quantity += 1
        },
        decrement: (state, action) => {
          let index = state.cartItems.findIndex(
            (item) => item.id === action.payload,
          )
          if (state.cartItems[index].quantity <= 0) {
            state.cartItems[index].quantity = 0
          } else {
            state.cartItems[index].quantity -= 1
          }
        },
    },
})

 const cartReducer = cartSlice.reducer
 export default cartReducer;
export const {addCartProduct, getCartProducts, getCartCount, getSubTotal, increment, decrement} = cartSlice.actions;