import { configureStore } from "@reduxjs/toolkit";

import transactionReducer from "../features/transactions/transactionSlice";

import uiReducer from "../features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,

    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
