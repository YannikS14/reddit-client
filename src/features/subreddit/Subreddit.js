import React from 'react';

export default function Subreddit({ subreddit }) {
  return (
    <div class="flex items-center py-4">
      <img
        src={subreddit.icon}
        alt=""
        class="w-6 h-6 mr-2 rounded-full"
      />
      <p class="font-semibold">{subreddit.title}</p>
    </div>
  );
}
