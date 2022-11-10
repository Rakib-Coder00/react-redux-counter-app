import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'RHB',
        email: 'example@admin.com'
    },
    reducers: {
        update(state, action) {
            state.name = action.payload.name
            state.email = action.payload.email
        },
        remove(state) {
             state.name = ''
             state.email= ''
        }
    }

})
export const { update, remove } = userSlice.actions
export default userSlice.reducer