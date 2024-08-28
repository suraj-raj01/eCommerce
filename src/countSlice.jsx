import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name:"addCart",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload);
        }
    }
})
export default countSlice.reducer;
export const {addToCart} = countSlice.actions;