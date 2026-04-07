import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: "viewer", // viewer | admin
  theme: "light",
  filters: {
    search: "",
    type: "all",
    category: "all",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const { setRole, setTheme, setFilters } = uiSlice.actions;
export default uiSlice.reducer;