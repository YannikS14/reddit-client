import moment from 'moment';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Annotation from '../../assets/Annotation';
import Arrow from '../../assets/Arrow';
import { useSelector } from 'react-redux';
import { selectPosts } from '../posts/postsSlice';
import PostModal from '../PostModal/PostModal';

export default function Post({ post, className = '' }) {
  const { isLoading } = useSelector(selectPosts);

  const kFormatter = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
      : Math.sign(num) * Math.abs(num);
  };

  const postDate = moment(post.data.created * 1000).fromNow();
  const upvotes = kFormatter(post.data.ups);
  const commentsAmount = kFormatter(post.data.num_comments);

  const [vote, setVote] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (e) => {
    vote === e.target.id ? setVote('') : setVote(e.target.id);
  };

  const toggleModal = (e) => {
    if (
      e.target === e.currentTarget &&
      e.target.parentNode.parentNode.parentNode.id !== 'post-modal'
    )
      setOpenModal(!openModal);
  };

  return (
    <article
      className={`mb-8 p-6 bg-white rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 flex z-20 ${className}`}
    >
      {openModal && (
        <PostModal post={post} toggleModal={toggleModal} />
      )}
      <div id="votes" className="pr-6 flex flex-col items-center">
        <button
          id="upvote"
          onClick={(e) => handleClick(e)}
          className="text-gray-500 hover:text-green-500"
        >
          <Arrow
            className={`transform transition duration-300 ${
              vote === 'upvote' ? 'text-green-500 scale-125' : ''
            }`}
          />
        </button>
        <p className="my-1.5 text-lg font-bold text-gray-500">
          {isLoading ? <Skeleton height={24} width={31} /> : upvotes}
        </p>
        <button
          id="downvote"
          onClick={(e) => handleClick(e)}
          className="text-gray-500 hover:text-red-500"
        >
          <Arrow
            className={`transform transition duration-300 rotate-180 ${
              vote === 'downvote' ? 'text-red-500 scale-125' : ''
            }
            `}
          />
        </button>
      </div>

      <div id="post-content" className="flex-1 overflow-hidden">
        <h3
          className="mb-4 text-xl font-semibold text-gray-800"
          onClick={toggleModal}
        >
          {isLoading ? <Skeleton /> : post.data.title}
        </h3>
        {!post.data.is_video && post.data.url && isLoading ? (
          <Skeleton />
        ) : (
          <img
            src={post.data.url}
            alt=""
            className="rounded-md max-h-80"
          />
        )}
        {post.data.is_video &&
          (isLoading ? (
            <Skeleton />
          ) : (
            <video className="max-h-80" controls>
              <source
                src={post.data.secure_media.reddit_video.fallback_url}
                type="video/mp4"
              />
            </video>
          ))}
        {post.data.selftext && isLoading ? (
          <Skeleton count={4} />
        ) : (
          <ReactMarkdown
            className="mt-4"
            components={{
              a: ({ node, ...props }) => (
                <a
                  className="underline hover:text-primary"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p className="mb-2" {...props}></p>
              ),
            }}
          >
            {post.data.selftext}
          </ReactMarkdown>
        )}
        <hr className="mt-4" />
        <div
          id="post-footer"
          className="flex justify-between px-8 py-2"
        >
          <div className="font-semibold text-gray-800 text-sm">
            {isLoading ? <Skeleton width={100} /> : post.data.author}
          </div>
          <div className="text-gray-800 text-xs">
            {isLoading ? <Skeleton width={100} /> : postDate}
          </div>
          <div className="flex text-gray-800 text-sm">
            <button
              id="comments"
              className="text-gray-500 hover:text-gray-800"
            >
              <Annotation className="mr-1 transition duration-300" />
            </button>
            {isLoading ? <Skeleton width={75} /> : commentsAmount}
          </div>
        </div>
      </div>
    </article>
  );
}
