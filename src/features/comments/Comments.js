import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from '../comment/Comment';
import Skeleton from 'react-loading-skeleton';

export default function Comments({ postSubreddit, postId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://www.reddit.com/r/${postSubreddit}/comments/${postId}.json`,
        );
        setComments(response.data[1].data.children);
      } catch (e) {
        setHasErrors(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [postSubreddit, postId]);

  return (
    <div id="post-comments" className="mt-2">
      {isLoading && <Skeleton count={3} />}
      {!hasErrors &&
        !isLoading &&
        comments.slice(0, 10).map((comment) => {
          return (
            <Comment
              comment={comment}
              key={comment.data.id}
              isLoading={isLoading}
            />
          );
        })}
    </div>
  );
}
