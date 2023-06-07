import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  currency: "",
  error: "",
};

export const fetchCurrency = createAsyncThunk(
  "currency/fetchcurrency",
  (code) => {
    return axios
      .get(`https://restcountries.com/v2/currency/${code}`)
      .then((res) => res.data);
  }
);

const currencySlice = createSlice({
  name: "currency",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCurrency.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCurrency.fulfilled, (state, action) => {
      state.loading = false;
      state.currency = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCurrency.rejected, (state, action) => {
      state.loading = false;
      state.currency = "";
      state.error = action.error.message;
    });
  },
});

export default currencySlice.reducer;
