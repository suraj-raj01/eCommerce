import { createSlice } from "@reduxjs/toolkit";
import { message } from 'antd';
const addtoCart= createSlice({
    name:"addCart",
    initialState:{
        cart:[]
    },
    reducers:{
        addcartData:(state, action)=>{
        const myCart= state.cart.filter((key)=>{
                   if (key.id==action.payload.id)
                   {
                      return true;
                   }
            })
            if (myCart.length>=1)
            {
                message.error("This Product Already Added!!!")
            }
            else
            {
                state.cart.push(action.payload);
                message.success("Item added successfull!!")
            }
        },

        qntyInc:(state, action)=>{
           
            for (var i=0; i<state.cart.length; i++)
            {
                 if(state.cart[i].id==action.payload.id)
                 {
                    state.cart[i].qnty++;
                 }
            }
        },
        qntyDec:(state, action)=>{
            for (var i=0; i<state.cart.length; i++)
                {
                     if(state.cart[i].id==action.payload.id)
                     {
                        if (state.cart[i].qnty<=1)
                        {
                            message.error("Quantity can not be less than 1 ");
                        }
                        else 
                        {
                        state.cart[i].qnty--;
                        }
                     }
                }
        },
        dataDel:(state, action)=>{
             state.cart=state.cart.filter(item=>item.id!=action.payload.id)
             message.success("Item Removed!!")
        }
    }
})
export default addtoCart.reducer;
export const {addcartData,qntyInc, qntyDec, dataDel}= addtoCart.actions;