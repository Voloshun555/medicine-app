import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteState {
    shopList: string[];
}

const initialState: FavoriteState = {
    shopList: [],
};

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addShopItem: (state, action: PayloadAction<{ item: any }>) => {
            state.shopList.push(action.payload.item.id);
        },
        removeShopItem: (state, action: PayloadAction<{ id: string }>) => {
            state.shopList = state.shopList.filter(itemId => itemId !== action.payload.id);
        },
    },
});

export const { addShopItem, removeShopItem } = shopSlice.actions;
export const shopReducer = shopSlice.reducer;