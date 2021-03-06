import React from 'react';
import Post from '../post/Post';

export default function PostModal({ post, toggleModal }) {
  if (!post)
    return <p className="text-red-600">Couldn't load post</p>;

  return (
    <div
      id="post-modal"
      className="w-screen h-screen fixed bg-gray-900 bg-opacity-75 inset-0 flex items-center justify-center z-10 overflow-y-auto"
      onClick={toggleModal}
      role="dialog"
    >
      <Post post={post} className="max-w-screen-lg mx-4" />
    </div>
  );
}
