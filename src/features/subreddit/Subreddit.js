import React from 'react';
import { updateActiveSubreddit } from '../subreddits/subredditsSlice';
import { useDispatch } from 'react-redux';

export default function Subreddit({
  subreddit = { icon: '', title: '' },
  active,
}) {
  const dispatch = useDispatch();

  return (
    <button
      className={`w-full flex items-center p-4 rounded-md transition-colors hover:text-primary ${
        active ? 'bg-gray-100 dark:bg-gray-600' : ''
      }`}
      onClick={() => dispatch(updateActiveSubreddit(subreddit.title))}
    >
      <img
        src={subreddit.icon}
        alt=""
        className="w-6 h-6 mr-2 border border-gray-500 rounded-full"
      />
      <p className="font-semibold">{subreddit.title}</p>
    </button>
  );
}
