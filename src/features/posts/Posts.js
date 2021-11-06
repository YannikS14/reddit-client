import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, fetchPosts } from './postsSlice';
import Post from '../post/Post';

export default function Posts() {
  const { posts, isLoading, hasErrors } = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <section className="sm:w-2/3 mx-4 flex-auto">
      {isLoading && (
        <h2 className="mb-8 p-6 bg-white rounded-md shadow-lg text-xl font-bold">
          Loading posts...
        </h2>
      )}
      {hasErrors && (
        <h2 className="mb-8 p-6 bg-white rounded-md shadow-lg text-xl text-red-500 font-bold">
          Cannot display posts...
        </h2>
      )}
      {posts &&
        posts.map((post) => {
          return <Post post={post} key={post.data.id} />;
        })}
    </section>
  );
}
