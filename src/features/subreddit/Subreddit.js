import React from 'react';

export default function Subreddit({ subreddit }) {
  return (
    <div className="flex items-center py-4">
      <img
        src={subreddit.icon}
        alt=""
        className="w-6 h-6 mr-2 rounded-full"
      />
      <p className="font-semibold">{subreddit.title}</p>
    </div>
  );
}
