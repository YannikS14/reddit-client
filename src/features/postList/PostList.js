import React from 'react';
import Post from '../post/Post';

export default function PostList({ posts }) {
  return (
    <section class="sm:w-2/3 mx-4 flex-auto">
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </section>
  );
}
