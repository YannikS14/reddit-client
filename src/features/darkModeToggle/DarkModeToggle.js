import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTheme } from '../../appSlice';

export default function DarkModeToggle() {
  const dispatch = useDispatch();

  return (
    <div
      id="dark-mode-toggle"
      className="hidden sm:flex border-solid border-2 border-gray-300 dark:border-gray-500 rounded-md divide-x-2 divide-gray-300 dark:divide-gray-500 divide-solid"
    >
      <button
        id="light-mode"
        data-testid="btn-light-mode"
        className="px-4 py-2 text-primary dark:text-gray-50"
        onClick={() => dispatch(updateTheme('light'))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
      <button
        id="dark-mode"
        data-testid="btn-dark-mode"
        className="px-4 py-2 dark:text-primary"
        onClick={() => dispatch(updateTheme('dark'))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </div>
  );
}
