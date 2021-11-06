import React from 'react';

export default function Arrow({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={'h-6 w-6 pointer-events-none ' + className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
      />
    </svg>
  );
}
