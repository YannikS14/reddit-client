import React from 'react';
import Subreddit from '../subreddit/Subreddit';

export default function SubredditList({ subreddits }) {
  return (
    <section class="sm:mx-4 sm:w-1/3 sm:ml-0 flex-auto">
      <div class="p-6 bg-white sm:rounded-md shadow-lg">
        <h2 class="text-xl font-bold">Subreddits</h2>
        <div class="mt-4">
          {subreddits.map((subreddit) => {
            return <Subreddit subreddit={subreddit} />;
          })}
        </div>
      </div>
    </section>
  );
}
