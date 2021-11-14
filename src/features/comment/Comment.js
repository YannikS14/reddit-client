import moment from 'moment';
import React from 'react';

export default function Comment({ comment }) {
  const commentDate = moment(comment.data.created * 1000).fromNow();

  return (
    <div
      id="comment"
      className="mb-2 px-8 py-3 bg-gray-100 dark:bg-gray-600 rounded-md hover:shadow"
    >
      <div className="flex justify-between pb-2">
        <div className="font-semibold text-sm">
          {comment.data.author}
        </div>
        <div className="text-xs">{commentDate}</div>
      </div>
      <p>{comment.data.body}</p>
    </div>
  );
}
