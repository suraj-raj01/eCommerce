import { configureStore } from "@reduxjs/toolkit";
import myCount from "./countSlice";
const store = configureStore({
    reducer:{
        addCart:myCount
    }
})
export default store;