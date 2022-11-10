import {createAsyncThunk, nanoid, createSlice} from "@reduxjs/toolkit";

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
              console.log(action.payload.detail._id)
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
        }
    },
    getCartProducts: (state, action) => {
        return {
          ...state,
        }
      },
})

 const cartReducer = cartSlice.reducer
 export default cartReducer;
export const {addCartProduct, getCartProducts} = cartSlice.actions;