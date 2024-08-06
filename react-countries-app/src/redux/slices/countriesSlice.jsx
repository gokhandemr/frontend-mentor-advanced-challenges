import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// Data
import data from "../../data/index.json";

export const getCountries = createAsyncThunk("getCountries", async () => {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 300);
  });
  return response;
});

const initialState = {
  data: [],
  filteredData: [],
  isLoading: false,
  isRegion: "",
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    searchCountry: (state, action) => {
      let filtered = state.filteredData.filter(({name}) => name.toLowerCase().includes(action.payload.toLowerCase()));
      if (filtered.length > 0) {
        state.filteredData = filtered;
      }
      if (action.payload.length <= 0) {
        let filtered = state.isRegion !== "" ? state.data.filter((item) => item.region === state.isRegion) : state.data;
        state.filteredData = filtered;
      }
    },
    filteredCountries: (state, action) => {
      if (action.payload !== "") {
        state.filteredData = state.data;
        let filtered = state.filteredData.filter((item) => item.region === action.payload);
        state.filteredData = filtered;
        state.isRegion = action.payload;
      } else {
        state.filteredData = state.data;
        state.isRegion = "";
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCountries.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.filteredData = action.payload;
      state.data = action.payload;
      state.isLoading = false;
    });
  },
});

export const {searchCountry, filteredCountries} = countriesSlice.actions;
export default countriesSlice.reducer;
