import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Arrow from '../../assets/Arrow';
import { kFormatter } from '../post/Post';

export default function Votes({ votes, isLoading }) {
  const [vote, setVote] = useState('');
  const upvotes = kFormatter(votes);

  const handleClick = (e) => {
    vote === e.target.ariaLabel
      ? setVote('')
      : setVote(e.target.ariaLabel);
  };

  return (
    <div id="votes" className="pr-6 flex flex-col items-center">
      <button
        onClick={(e) => handleClick(e)}
        className="text-gray-500 dark:text-gray-300 hover:text-green-500"
        aria-label="Upvote"
      >
        <Arrow
          className={`transform transition duration-300 ${
            vote === 'Upvote' ? 'text-green-500 scale-125' : ''
          }`}
        />
      </button>
      <p className="my-1.5 text-lg font-bold">
        {isLoading ? <Skeleton height={24} width={31} /> : upvotes}
      </p>
      <button
        onClick={(e) => handleClick(e)}
        className="text-gray-500 dark:text-gray-300 hover:text-red-500"
        aria-label="Downvote"
      >
        <Arrow
          className={`transform transition duration-300 rotate-180 ${
            vote === 'Downvote' ? 'text-red-500 scale-125' : ''
          }
    `}
        />
      </button>
    </div>
  );
}
