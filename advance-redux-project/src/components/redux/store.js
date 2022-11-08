import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./features/uiSlice";
import cartReducer from './features/cartSlice'


const store = configureStore({
    reducer: {
        ui: uiReducer,
        cart: cartReducer
    }
})

export default store;