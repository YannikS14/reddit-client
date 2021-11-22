import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    theme: 'light',
  },
  reducers: {
    updateTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const selectTheme = (state) => state.app.theme;

export const { updateTheme } = appSlice.actions;

export default appSlice.reducer;
