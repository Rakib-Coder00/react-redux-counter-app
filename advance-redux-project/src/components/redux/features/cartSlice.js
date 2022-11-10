
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQty: 0,
        totalPrice: 0,
        // price: 0
    },
    reducers: {
        addItem(state, action) {
            const newItem = action.payload
            const existItem = state.items.find(item => item.id === newItem.id)
            state.totalQty++
            if (!existItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    qty: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }
            else {
                existItem.qty++
                existItem.totalPrice = existItem.totalPrice + newItem.price;
            }
        },
        removeItem(state, action) {
            const id = action.payload
            const existItem = state.items.find(item => item.id === id);
            state.totalQty--
            state.changed = true
            if (existItem.qty === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existItem.qty--
                existItem.totalPrice = existItem.totalPrice - existItem.price;
            }
        }
    }
})
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;