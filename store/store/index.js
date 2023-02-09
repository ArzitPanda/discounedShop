import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import productReducers from "./productReducers";


const store =configureStore({
  reducer:{
    products:productReducers,
    cart:cartReducer
  }
})


export default store