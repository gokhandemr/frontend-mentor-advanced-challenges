import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// Data
import data from "../../data/index.json";

export const getCountry = createAsyncThunk("getCountry", async (alpha3Code) => {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.filter((item) => item.alpha3Code == alpha3Code && item));
    }, 300);
  });
  return response;
});

const initialState = {
  data: [],
  isLoading: false,
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountry.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCountry.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
  },
});

export default countrySlice.reducer;
