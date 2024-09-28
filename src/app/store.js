import { configureStore } from "@reduxjs/toolkit";
import toggleModeReducer from "./features/toggleMode";
import selectedCountryReducer from "./features/selectedCountry"

export const store = configureStore({
    reducer: {
        toggleMode: toggleModeReducer,
        selectedCountry: selectedCountryReducer,
    },
})