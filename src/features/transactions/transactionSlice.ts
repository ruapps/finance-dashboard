import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Transaction } from "../../types/transaction";

import { transactions as dummyData } from "../../utils/dummyData";

interface TransactionState {
  transactions: Transaction[];

  status: "idle" | "loading" | "success" | "error";

  error: string | null;
}

const loadFromStorage = (): Transaction[] => {
  const data = localStorage.getItem("transactions");

  return data ? JSON.parse(data) : dummyData;
};

const saveToStorage = (data: Transaction[]) => {
  localStorage.setItem("transactions", JSON.stringify(data));
};

const initialState: TransactionState = {
  transactions: loadFromStorage(),

  status: "idle",

  error: null,
};

const transactionSlice = createSlice({
  name: "transactions",

  initialState,

  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);

      saveToStorage(state.transactions);
    },

    updateTransaction: (state, action: PayloadAction<Transaction>) => {
      const index = state.transactions.findIndex(
        (t) => t.id === action.payload.id,
      );

      if (index !== -1) {
        state.transactions[index] = action.payload;

        saveToStorage(state.transactions);
      }
    },
  },
});

export const { addTransaction, updateTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
