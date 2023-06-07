import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  countries: [],
  error: "",
};

export const fetchCountries = createAsyncThunk(
  "country/fetchCountries",
  (name) => {
    return axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.data.slice(0, 5));
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.loading = false;
      state.countries = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.loading = false;
      state.countries = [];
      state.error = action.error.message;
    });
  },
});

export default countrySlice.reducer;
