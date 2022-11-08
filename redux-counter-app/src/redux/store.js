import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./features/authSlice"
import counterReducer from "./features/counterSlice"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})
export default store