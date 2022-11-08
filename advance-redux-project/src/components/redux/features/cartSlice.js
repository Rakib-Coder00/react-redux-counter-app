
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        qty: 0,
        total: 0,
    },
    reducers: {
        addItem(state, action) {
            const newItem = action.payload
            const existItem = state.items.find(item => item.id === newItem.id)
            if (!existItem) {
                state.items.push({
                    itemId: newItem.id,
                    price: newItem.price,
                    qty: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                });
            }
            else {
                existItem.qty = existItem.qty++;
                existItem.totalPrice = existItem.totalPrice + newItem.price;
            }
        },
        removeItem(state, action) {
            state.items.splice(state.items.indexOf(action.payload), 1);
            state.total -= 1;

            if (state.items.length === 0) {
                state.qty = 0;
                state.total = 0;
            }
        }
    }
})

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;