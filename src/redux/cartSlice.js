import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers:{
        addToCart(state,action){
            const exitingItem = state.cart.find((item)=>item.id == action.payload.id);
            if(exitingItem){
                exitingItem.qty += 1;
            }else{
                state.cart.push({...action.payload,qty:1});
            }
        }

  }
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;