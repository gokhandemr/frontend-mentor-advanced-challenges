import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isDark: localStorage.getItem("theme") != undefined ? JSON.parse(localStorage.getItem("theme")) : false,
};

export const themeColorSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeThemeColor: (state) => {
      state.isDark = !state.isDark;
      localStorage.setItem("theme", state.isDark);
    },
  },
});

export const {changeThemeColor} = themeColorSlice.actions;
export default themeColorSlice.reducer;
