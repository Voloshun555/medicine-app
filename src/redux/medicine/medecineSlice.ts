import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getAllMedicines } from "./medecineOperation";

export interface IData {
    pharmacy: string;
    id: string
    name: string
    image:string
}
interface MedicineState {
    items: IData[];
    isLoading: boolean;
    error: string | null;
}



const medicine: MedicineState = {
    items: [],
    isLoading: false,
    error: null,
};

const handlePending = (state: MedicineState) => {
    state.isLoading = true;
};

const handleFulfilled = (state: MedicineState, action: PayloadAction<any[]>) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
};

const handleRejected = (state: MedicineState, action: PayloadAction<any>) => {
    state.isLoading = false;
    state.error = action.payload;
};

const medicineSlice = createSlice({
    name: "medicine",
    initialState: medicine,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllMedicines.pending, handlePending)
            .addCase(getAllMedicines.fulfilled, handleFulfilled)
            .addCase(getAllMedicines.rejected, handleRejected)
    },
});

export const medicineReducer = medicineSlice.reducer;