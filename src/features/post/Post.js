import React from 'react';

export default function Post({ post }) {
  return (
    <article class="mb-8 p-6 bg-white rounded-md shadow-lg flex">
      <div id="votes" class="pr-6 flex flex-col items-center">
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
        <p>{post.votes}</p>
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
      <div id="post-content" class="flex-1">
        <h3 class="mb-4 text-xl font-semibold">{post.title}</h3>
        {post.image && (
          <img src={post.image} alt="" class="rounded-md" />
        )}
        {post.content && <p class="mt-4">{post.content}</p>}
        <hr class="mt-4" />
        <div id="post-footer" class="flex justify-between px-8 py-2">
          <div class="font-semibold">{post.postedBy}</div>
          <div>{post.publishDate}</div>
          <div class="flex">
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
            {post.commentsAmount}
          </div>
        </div>
      </div>
    </article>
  );
}
