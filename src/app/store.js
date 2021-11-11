import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import subredditReducer from '../features/subreddits/subredditsSlice';
import searchFieldReducer from '../features/searchField/searchFieldSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    subreddits: subredditReducer,
    searchField: searchFieldReducer,
  },
});
