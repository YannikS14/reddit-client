import React from 'react';
import { useSelector } from 'react-redux';
import { selectSubreddits } from './subredditsSlice';
import Subreddit from '../subreddit/Subreddit';

export default function Subreddits() {
  const { subreddits, activeSubreddit } =
    useSelector(selectSubreddits);

  return (
    <section className="sm:mx-4 sm:w-1/3 sm:ml-0 flex-auto">
      <div className="p-6 bg-white sm:rounded-md shadow-lg">
        <h2 className="text-xl font-bold">Subreddits</h2>
        <div className="mt-4">
          {subreddits.map((subreddit) => {
            return (
              <Subreddit
                subreddit={subreddit}
                key={subreddit.title}
                active={
                  activeSubreddit === subreddit.title ? true : false
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
