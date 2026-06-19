import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UIState, UserRole, Filters } from "../../types/ui";

const initialState: UIState = {
  role: "viewer",

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
    setRole: (state, action: PayloadAction<UserRole>) => {
      state.role = action.payload;
    },

    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },

    setFilters: (state, action: PayloadAction<Partial<Filters>>) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
  },
});

export const { setRole, setTheme, setFilters } = uiSlice.actions;

export default uiSlice.reducer;
