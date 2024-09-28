import { createSlice } from "@reduxjs/toolkit";

const selectedCountrySlice = createSlice({
    name: "selectedCountry",
    initialState: {
        selectedCountryData: null,
    },
    reducers: {
        setSelectedCountry: (state, action) => {
            state.selectedCountryData = action.payload;
        },
        removeSelectedCountry: (state) => {
            state.selectedCountryData = null;
        }
    },
})

export const { setSelectedCountry, removeSelectedCountry } = selectedCountrySlice.actions;
export default selectedCountrySlice.reducer;