import { createSlice } from "@reduxjs/toolkit"


interface IInitialState {
    items: [{
        pharmacy: string
        medications: [{
            id: string;
            price: number;
            image: string;
            name: string;
        }]

    }]
    isLoading: boolean
    error: null
}

const initialState: IInitialState = {
    items: [{
        pharmacy: '',
        medications: [{
            id: '',
            price: NaN,
            image: '',
            name: ''
        }]
    }],
    isLoading: false,
    error: null,
};


export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        filterMedicine(state, action) {
            state.items = action.payload
        }
    }
})

export const filterReducer = filterSlice.reducer;

export const { filterMedicine } = filterSlice.actions;