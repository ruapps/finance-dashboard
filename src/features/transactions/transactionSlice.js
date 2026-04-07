import { createSlice } from "@reduxjs/toolkit";
import { transactions as dummyData } from "../../utils/dummyData";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTransactionsAPI } from "../../services/transactionAPI";

// Async thunk to fetch transactions from API
export const fetchTransactions = createAsyncThunk(
  "transactions/fetch",
  async () => {
    const res = await fetchTransactionsAPI();
    return res.data;
  },
);

// Utility functions to load/save transactions from/to localStorage
const loadFromStorage = () => {
  const data = localStorage.getItem("transactions");
  return data ? JSON.parse(data) : dummyData;
};

const saveToStorage = (data) => {
  localStorage.setItem("transactions", JSON.stringify(data));
};

const initialState = {
  transactions: loadFromStorage(),
  status: "idle",
  error: null,
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
      saveToStorage(state.transactions);
    },
    updateTransaction: (state, action) => {
      const index = state.transactions.findIndex(
        (t) => t.id === action.payload.id,
      );
      if (index !== -1) {
        state.transactions[index] = action.payload;
        saveToStorage(state.transactions);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.status = "success";
      })
      .addCase(fetchTransactions.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { addTransaction, updateTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
