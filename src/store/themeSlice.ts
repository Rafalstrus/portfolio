import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  value: "light" | "dark"
};

const initialState = { value: localStorage.getItem('theme') ?? 'light' } as ThemeState;

const themeSlice = createSlice({
  name: 'themeState',
  initialState,
  reducers: {
    changeTheme(themeState: ThemeState) {
      themeState.value = themeState.value === "light" ? "dark" : "light";
      localStorage.setItem('theme', themeState.value);
    }
  },
});


export default themeSlice;