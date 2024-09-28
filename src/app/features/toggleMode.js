import { createSlice } from "@reduxjs/toolkit";

// toggleMode slice
const toggleModeSlice = createSlice({
  name: "toggleMode",
  initialState: {
    mode: localStorage.getItem('mode') || 'light_mode',
  },
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "light_mode" ? "dark_mode" : "light_mode";
      localStorage.setItem("mode", state.mode);
    },
  },
});

export const { toggleMode } = toggleModeSlice.actions;
export default toggleModeSlice.reducer;


