import { createSlice } from '@reduxjs/toolkit';

export const searchFieldSlice = createSlice({
  name: 'searchField',
  initialState: {
    searchText: '',
  },
  reducers: {
    updateSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const selectSearchText = (state) =>
  state.searchField.searchText;

export const { updateSearchText } = searchFieldSlice.actions;

export default searchFieldSlice.reducer;
