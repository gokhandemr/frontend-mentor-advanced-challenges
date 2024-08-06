import {configureStore} from "@reduxjs/toolkit";
import countriesReducer from "./slices/countriesSlice";
import countryReducer from "./slices/countrySlice";
import themeReducer from "./slices/themeColorSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    country: countryReducer,
    theme: themeReducer,
  },
});
