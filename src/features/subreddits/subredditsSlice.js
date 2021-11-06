import { createSlice } from '@reduxjs/toolkit';

export const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState: [
    {
      icon: 'https://b.thumbs.redditmedia.com/EndDxMGB-FTZ2MGtjepQ06cQEkZw_YQAsOUudpb9nSQ.png',
      title: 'AskReddit',
    },
    {
      icon: 'https://b.thumbs.redditmedia.com/0PgZl68jAxA6T1BH6uvUQ5Bz1F1GrrJLCL8oi2Gz0Ak.png',
      title: 'gaming',
    },
  ],
  reducers: {},
});

export const selectSubreddits = (state) => state.subreddits;

export default subredditsSlice.reducer;
