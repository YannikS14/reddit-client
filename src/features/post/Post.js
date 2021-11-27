import moment from 'moment';
import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Annotation from '../../assets/Annotation';
import { useSelector } from 'react-redux';
import { selectPosts } from '../posts/postsSlice';
import { selectTheme } from '../../appSlice';
import PostModal from '../PostModal/PostModal';
import Comments from '../comments/Comments';
import Votes from '../votes/Votes';

export const kFormatter = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num);
};

export default function Post({ post, className = '' }) {
  const { isLoading } = useSelector(selectPosts);
  const theme = useSelector(selectTheme);

  const postDate = moment(post.data.created * 1000).fromNow();
  const commentsAmount = kFormatter(post.data.num_comments);

  const [openModal, setOpenModal] = useState(false);
  const [toggleComments, setToggleComments] = useState(false);

  const toggleModal = (e) => {
    if (
      e.target === e.currentTarget &&
      e.target.parentNode.parentNode.parentNode.id !== 'post-modal'
    )
      setOpenModal(!openModal);
  };

  const renderPostImage = () => {
    if (isLoading) return <Skeleton />;
    if (post.data.post_hint === 'image') {
      return (
        <img
          src={post.data.url}
          alt=""
          className="rounded-md max-h-80"
        />
      );
    }
  };

  const renderPostVideo = () => {
    if (isLoading) return <Skeleton />;
    if (post.data.is_video) {
      return (
        <video className="max-h-80" controls>
          <source
            src={post.data.media.reddit_video.fallback_url}
            type="video/mp4"
          />
        </video>
      );
    }
  };

  const renderPostText = () => {
    if (isLoading) return <Skeleton count={4} />;
    if (post.data.selftext) {
      return (
        <Markdown
          options={{
            overrides: {
              a: {
                props: { className: 'underline hover:text-primary' },
              },
              p: {
                props: { className: 'mb-2' },
              },
            },
          }}
        >
          {post.data.selftext}
        </Markdown>
      );
    }
  };

  const renderPostLink = () => {
    if (isLoading) return <Skeleton />;
    if (post.data.post_hint === 'link') {
      return (
        <a
          href={post.data.url}
          className="underline hover:text-primary"
          data-testid="post-link"
        >
          {post.data.url}
        </a>
      );
    }
  };

  return (
    <article
      className={`mb-8 p-6 bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-50 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 flex z-20 ${className}`}
    >
      {openModal && (
        <PostModal post={post} toggleModal={toggleModal} />
      )}
      <SkeletonTheme
        baseColor={theme === 'dark' ? '#4b5563' : ''}
        highlightColor={theme === 'dark' ? '#6b7280' : ''}
      >
        <Votes votes={post.data.ups} isLoading={isLoading} />

        <div id="post-content" className="flex-1 overflow-hidden">
          <h2
            className="mb-4 text-xl font-semibold cursor-pointer"
            onClick={toggleModal}
          >
            {isLoading ? <Skeleton /> : post.data.title}
          </h2>
          {renderPostImage()}
          {renderPostVideo()}
          {renderPostText()}
          {renderPostLink()}
          <hr className="mt-4" />
          <div
            id="post-footer"
            className="flex flex-wrap justify-between px-8 py-2 gap-2"
          >
            <div className="font-semibold text-sm">
              {isLoading ? (
                <Skeleton width={100} />
              ) : (
                post.data.author
              )}
            </div>
            <div className="text-xs">
              {isLoading ? <Skeleton width={100} /> : postDate}
            </div>
            <div className="flex text-sm">
              <button
                className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-50"
                onClick={() => setToggleComments(!toggleComments)}
                aria-label="Comments"
              >
                <Annotation className="mr-1 transition duration-300" />
              </button>
              {isLoading ? <Skeleton width={75} /> : commentsAmount}
            </div>
          </div>
          {toggleComments && (
            <Comments
              postSubreddit={post.data.subreddit}
              postId={post.data.id}
            />
          )}
        </div>
      </SkeletonTheme>
    </article>
  );
}
