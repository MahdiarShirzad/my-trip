import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  darkMode: boolean;
}

const getSystemTheme = (): boolean => {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

const initialState: ThemeState = {
  darkMode: localStorage.getItem("darkMode")
    ? localStorage.getItem("darkMode") === "true"
    : getSystemTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", state.darkMode.toString());
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
