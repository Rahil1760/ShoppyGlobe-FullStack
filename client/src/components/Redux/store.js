import { configureStore } from "@reduxjs/toolkit";
import productDataSlice from "./productDataSlice";
import cartSlice from "./cartSlice";
const store = configureStore({
    reducer: {
        productData: productDataSlice,
        cart:cartSlice,
    }
});

export default store;