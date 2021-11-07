import { createSlice } from '@reduxjs/toolkit';

export const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState: {
    activeSubreddit: 'Home',
    subreddits: [
      {
        icon: 'https://api.adorable.io/avatars/25/Home',
        title: 'Home',
      },
      {
        icon: 'https://b.thumbs.redditmedia.com/EndDxMGB-FTZ2MGtjepQ06cQEkZw_YQAsOUudpb9nSQ.png',
        title: 'AskReddit',
      },
      {
        icon: 'https://a.thumbs.redditmedia.com/nmh5l-zCsmmc3y2ehfjtWRJjGmCEWEJDTjtW3AGMz60.png',
        title: 'Wallstreetbets',
      },
      {
        icon: 'https://b.thumbs.redditmedia.com/0PgZl68jAxA6T1BH6uvUQ5Bz1F1GrrJLCL8oi2Gz0Ak.png',
        title: 'Gaming',
      },
      {
        icon: 'https://b.thumbs.redditmedia.com/Kl3TBjINRBLd9sukJaSPts_0geISdO-jtVniyfCw1GA.png',
        title: 'CryptoCurrency',
      },
      {
        icon: 'https://a.thumbs.redditmedia.com/4SKK4rzvSSDPLWbx4kt0BvE7B-j1UQBLZJsNCGgMz54.png',
        title: 'Germany',
      },
      {
        icon: 'https://styles.redditmedia.com/t5_2twpw/styles/communityIcon_8bhyo9k303x71.png',
        title: 'Blackcats',
      },
      {
        icon: 'https://api.adorable.io/avatars/25/Home',
        title: 'Cooking',
      },
      {
        icon: 'https://b.thumbs.redditmedia.com/B7IpR8P1mEsQIjdizK5x79s5aGfJUtKk3u2ksGZ9n2Q.png',
        title: 'Todayilearned',
      },
      {
        icon: 'https://styles.redditmedia.com/t5_2xiqj/styles/communityIcon_zvmcowk0d0671.jpg?format=pjpg&s=1537e0d3fd8639bce301c389ef60e99f44587d0a',
        title: 'Aoe4',
      },
      {
        icon: 'https://styles.redditmedia.com/t5_2qgzy/styles/communityIcon_rvt3zjh1fc551.png',
        title: 'Sports',
      },
      {
        icon: 'https://a.thumbs.redditmedia.com/E0Bkwgwe5TkVLflBA7WMe9fMSC7DV2UOeff-UpNJeb0.png',
        title: 'News',
      },
      {
        icon: 'https://styles.redditmedia.com/t5_2s9h3/styles/communityIcon_ujdrcdijabb61.png',
        title: 'DunderMifflin',
      },
    ],
  },
  reducers: {
    updateActiveSubreddit: (state, action) => {
      state.activeSubreddit = action.payload;
    },
  },
});

export const selectSubreddits = (state) => state.subreddits;

export const { updateActiveSubreddit } = subredditsSlice.actions;

export default subredditsSlice.reducer;
