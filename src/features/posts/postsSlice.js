import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (url) => {
    const response = await axios.get(url);
    return response.data.data.children;
  },
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    isLoading: false,
    hasErrors: false,
    posts: [
      {
        data: {
          id: 1,
          created: '',
          ups: '',
          num_comments: '',
          title: '',
          selftext: ' ',
          author: '',
        },
      },
      {
        data: {
          id: 2,
          created: '',
          ups: '',
          num_comments: '',
          title: '',
          selftext: ' ',
          author: '',
        },
      },
      {
        data: {
          id: 3,
          created: '',
          ups: '',
          num_comments: '',
          title: '',
          selftext: ' ',
          author: '',
        },
      },
      {
        data: {
          id: 4,
          created: '',
          ups: '',
          num_comments: '',
          title: '',
          selftext: ' ',
          author: '',
        },
      },
      {
        data: {
          id: 5,
          created: '',
          ups: '',
          num_comments: '',
          title: '',
          selftext: ' ',
          author: '',
        },
      },
    ],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.hasErrors = true;
        state.isLoading = false;
      });
  },
});

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;
