import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: {
            name: 'RHB',
            email: 'example@admin.com'
        },
        pending: false,
        error: false
    },
    reducers: {
        updateStart(state) {
            state.pending = true
        },
        updateSuccess(state, action) {
            state.pending = false
            state.userInfo = action.payload
        },
        updateError(state){
            state.error = true
            state.pending = false
        }
    }
})
export const { updateStart, updateSuccess, updateError} = userSlice.actions
export default userSlice.reducer