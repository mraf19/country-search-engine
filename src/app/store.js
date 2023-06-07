import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "../features/country/countrySlice";
import callingcodeSlice from "../features/callingcode/callingcodeSlice";
import currencySlice from "../features/currency/currencySlice";

const store = configureStore({
  reducer: {
    country: countrySlice,
    callingCode: callingcodeSlice,
    currency: currencySlice,
  },
});

export default store;
