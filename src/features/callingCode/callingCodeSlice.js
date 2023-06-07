import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  callingCode: "",
  error: "",
};

export const fetchCallingCode = createAsyncThunk(
  "callingCode/fetchCallingCode",
  (code) => {
    return axios
      .get(`https://restcountries.com/v2/callingcode/${code}`)
      .then((res) => res.data);
  }
);

const callingcodeSlice = createSlice({
  name: "callingCode",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCallingCode.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCallingCode.fulfilled, (state, action) => {
      state.loading = false;
      state.callingCode = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCallingCode.rejected, (state, action) => {
      state.loading = false;
      state.callingCode = "";
      state.error = action.error.message;
    });
  },
});

export default callingcodeSlice.reducer;
