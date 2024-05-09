import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  darkMode: boolean;
}

// Function to detect system theme
const getSystemTheme = (): boolean => {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

// Initialize state with system theme or local storage value if available
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
      // Save the user's theme preference to local storage
      localStorage.setItem("darkMode", state.darkMode.toString());
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
