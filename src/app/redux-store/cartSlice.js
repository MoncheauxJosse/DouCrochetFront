import {createSlice} from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name: "cart", 
    initialState: {
        cartItems: [],
        totalAmount: 0,
        totalCount: 0,
        subAmount: 0,
        status: "idle",
        error: null
    },
    reducers: {
        addCartProduct: {
            reducer: (state, action) => {
              let cartIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.detail._id,
              )
              let quantityMax = action.payload.detail.quantity
              console.log(quantityMax)
              if (cartIndex >= 0) {
                if(quantityMax > state.cartItems[cartIndex].quantity ){
                  state.cartItems[cartIndex].quantity += 1
                  toast.success('Produit ajouté au panier', {
                    position: toast.POSITION.BOTTOM_LEFT
                });
                }else{
                  toast.error('Il n\'y a plus de produits en stock', {
                    position: toast.POSITION.BOTTOM_LEFT
                });
                }
              } else {
                let tempProduct = { id:action.payload.detail._id, quantity: 1, quantityMax: action.payload.detail.quantity, price : action.payload.detail.price }
                state.cartItems.push(tempProduct)
                toast.success('Produit ajouté au panier', {
                  position: toast.POSITION.BOTTOM_LEFT
              });
              }
            },
        },
        increment: (state, action) => {
          console.log(action.payload)
          let index = state.cartItems.findIndex(
            (item) => item.id === action.payload._id,
            )
            console.log(state.cartItems)
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
        removeCartItem: (state, action) => {
          let index = state.cartItems.findIndex(
            (item) => item.id === action.payload._id,
            )
            console.log(index)
          if(index !== -1){
            state.cartItems.splice(index, 1)
          }
        }
    },
})

 const cartReducer = cartSlice.reducer
 export default cartReducer;
export const {addCartProduct, increment, decrement, removeCartItem} = cartSlice.actions;