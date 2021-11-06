import moment from 'moment';
import React from 'react';
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

  return (
    <article className="mb-8 p-6 bg-white rounded-md shadow-lg flex">
      <div id="votes" className="pr-6 flex flex-col items-center">
        <Arrow className="text-gray-500 hover:text-green-500" />
        <p className="my-1.5 text-lg font-bold text-gray-500">
          {upvotes}
        </p>
        <Arrow className="text-gray-500 hover:text-red-500 transform rotate-180" />
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
          <div className="text-gray-800 text-sm">{postDate}</div>
          <div className="flex text-gray-800 text-sm">
            <Annotation className="mr-1 text-gray-500 hover:text-gray-800" />
            {commentsAmount}
          </div>
        </div>
      </div>
    </article>
  );
}
