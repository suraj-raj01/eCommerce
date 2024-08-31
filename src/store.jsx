import { configureStore } from "@reduxjs/toolkit";
import myData from "./addtocartSlice";

const store = configureStore({
    reducer:{
        addCart:myData
    }
})

export default store;