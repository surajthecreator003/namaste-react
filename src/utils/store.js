import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store=configureStore({
    reducer:{cart:cartSlice}

})//this store will contain slices;


export default store;