import React from 'react';
import SearchField from '../searchField/SearchField';

export default function Header() {
  const toggleDarkMode = (e) => {
    const htmlTag = document.getElementsByTagName('html');
    const lightModeBtn = document.getElementById('light-mode');
    const darkModeBtn = document.getElementById('dark-mode');

    if (e.target.id === 'light-mode') {
      htmlTag[0].classList.remove('dark');
      lightModeBtn.classList.add('text-primary');
      darkModeBtn.classList.remove('text-primary');
    } else {
      htmlTag[0].classList.add('dark');
      darkModeBtn.classList.add('text-primary');
      lightModeBtn.classList.remove('text-primary');
    }
  };

  return (
    <header className="fixed z-20 min-w-full shadow-lg bg-white dark:bg-gray-700 dark:text-gray-50">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <div id="logo" className="flex items-center">
          <img
            className="w-8 fill-current text-green-600"
            src="reddit-logo.svg"
            alt="reddit logo"
          />
          <h1 className="pl-2 sm:text-xl font-semibold">
            <span className="font-bold">Reddit</span> Client
          </h1>
        </div>
        <SearchField />
        <div
          id="dark-mode-toggle"
          className="hidden sm:flex border-solid border-2 border-gray-300 dark:border-gray-500 rounded-md divide-x-2 divide-gray-300 dark:divide-gray-500 divide-solid"
        >
          <button
            id="light-mode"
            className="px-4 py-2 text-primary"
            onClick={(e) => toggleDarkMode(e)}
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
            className="px-4 py-2"
            onClick={(e) => toggleDarkMode(e)}
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
      </div>
    </header>
  );
}
