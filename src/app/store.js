import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../appSlice';
import postsReducer from '../features/posts/postsSlice';
import subredditReducer from '../features/subreddits/subredditsSlice';
import searchFieldReducer from '../features/searchField/searchFieldSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    posts: postsReducer,
    subreddits: subredditReducer,
    searchField: searchFieldReducer,
  },
});
