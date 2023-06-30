import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import wishListReducer  from "./wishlistReducer";

export const store = configureStore({
    reducer : {
        cart: cartReducer,
        wishlist: wishListReducer
    },
})