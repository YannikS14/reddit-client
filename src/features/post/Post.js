import moment from 'moment';
import React from 'react';

export default function Post({ post }) {
  const kFormatter = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
      : Math.sign(num) * Math.abs(num);
  };

  const postDate = moment(post.data.created * 1000).fromNow();
  const upvotes = kFormatter(post.data.ups);
  const commentsAmount = kFormatter(post.data.num_comments);

  return (
    <article className="mb-8 p-6 bg-white rounded-md shadow-lg flex">
      <div id="votes" className="pr-6 flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
          />
        </svg>
        <p>{upvotes}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
          />
        </svg>
      </div>
      <div id="post-content" className="flex-1">
        <h3 className="mb-4 text-xl font-semibold">
          {post.data.title}
        </h3>
        {post.data.url && (
          <img src={post.data.url} alt="" className="rounded-md" />
        )}
        {post.content && <p className="mt-4">{post.content}</p>}
        <hr className="mt-4" />
        <div
          id="post-footer"
          className="flex justify-between px-8 py-2"
        >
          <div className="font-semibold">{post.data.author}</div>
          <div>{postDate}</div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            {commentsAmount}
          </div>
        </div>
      </div>
    </article>
  );
}
