import moment from 'moment';
import React, { useState } from 'react';
import Annotation from '../../assets/Annotation';
import Arrow from '../../assets/Arrow';

export default function Post({ post }) {
  const kFormatter = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
      : Math.sign(num) * Math.abs(num);
  };

  const postDate = moment(post.data.created * 1000).fromNow();
  const upvotes = kFormatter(post.data.ups);
  const commentsAmount = kFormatter(post.data.num_comments);

  const [vote, setVote] = useState('');

  const handleClick = (e) => {
    console.log(e);
    vote === e.target.id ? setVote('') : setVote(e.target.id);
  };

  return (
    <article className="mb-8 p-6 bg-white rounded-md shadow-lg flex">
      <div id="votes" className="pr-6 flex flex-col items-center">
        <button id="upvote" onClick={(e) => handleClick(e)}>
          <Arrow
            className={`transform ${
              vote === 'upvote'
                ? 'text-green-500 scale-125'
                : 'text-gray-500 hover:text-green-500'
            }`}
          />
        </button>
        <p className="my-1.5 text-lg font-bold text-gray-500">
          {upvotes}
        </p>
        <button id="downvote" onClick={(e) => handleClick(e)}>
          <Arrow
            className={`transform rotate-180 ${
              vote === 'downvote'
                ? 'text-red-500 scale-125'
                : 'text-gray-500 hover:text-red-500'
            }
            `}
          />
        </button>
      </div>

      <div id="post-content" className="flex-1">
        <h3 className="mb-4 text-xl font-semibold text-gray-800">
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
          <div className="font-semibold text-gray-800 text-sm">
            {post.data.author}
          </div>
          <div className="text-gray-800 text-xs">{postDate}</div>
          <div className="flex text-gray-800 text-sm">
            <button id="comments">
              <Annotation className="mr-1 text-gray-500 hover:text-gray-800" />
            </button>
            {commentsAmount}
          </div>
        </div>
      </div>
    </article>
  );
}
