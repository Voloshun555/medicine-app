import { createSlice } from "@reduxjs/toolkit";
import { getAllMedicines } from "./medecineOperation";

export interface IInitialState {
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
const handlePending = (state: IInitialState) => {
    state.isLoading = true;
};

const handleFulfilled = (state: { isLoading: boolean; error: null; items: any; }, action: { payload: any; }) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
};

const medicineSlice = createSlice({
    name: "medicine",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllMedicines.pending, handlePending)
            .addCase(getAllMedicines.fulfilled, handleFulfilled)

    },
});

export const medicineReducer = medicineSlice.reducer;