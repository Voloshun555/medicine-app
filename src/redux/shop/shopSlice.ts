import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteState {
    shopList: any[]; // Change the type to any[] to store the entire item object
}

const initialState: FavoriteState = {
    shopList: [],
};

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addShopItem: (state, action: PayloadAction<{ item: any }>) => {
            state.shopList.push(action.payload.item); // Push the entire item object
        },
        removeShopItem: (state, action: PayloadAction<{ id: string }>) => {
            state.shopList = state.shopList.filter(item => item.id !== action.payload.id); // Filter out the item with the matching ID
        },
    },
});

export const { addShopItem, removeShopItem } = shopSlice.actions;
export const shopReducer = shopSlice.reducer;