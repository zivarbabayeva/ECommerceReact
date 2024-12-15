
import {configureStore} from "@reduxjs/toolkit";
import counterStore from "./counterStore";
import authStore from "./authSlice";
import cartSlice from "./cartSlice";
const store=configureStore({
    reducer:{
        counter:counterStore.reducer,
        auth:authStore.reducer,
    cart: cartSlice.reducer,
},
})
export default store;