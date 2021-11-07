import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, fetchPosts } from './postsSlice';
import { selectActiveSubreddit } from '../subreddits/subredditsSlice';
import Post from '../post/Post';

export default function Posts() {
  const { posts, hasErrors } = useSelector(selectPosts);
  const activeSubreddit = useSelector(selectActiveSubreddit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchPosts(`https://www.reddit.com/r/${activeSubreddit}.json`),
    );
  }, [dispatch, activeSubreddit]);

  return (
    <section className="lg:w-2/3 mx-4 flex-auto">
      {hasErrors && (
        <h2 className="mb-8 p-6 bg-white rounded-md shadow-lg text-xl text-red-500 font-bold">
          Cannot display posts...
        </h2>
      )}
      {!hasErrors &&
        posts &&
        posts.map((post) => {
          return <Post post={post} key={post.data.id} />;
        })}
    </section>
  );
}
