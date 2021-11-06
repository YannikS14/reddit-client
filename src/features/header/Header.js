import React from 'react';

export default function Header() {
  return (
    <header className="fixed z-10 min-w-full shadow-lg bg-white">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <div id="logo" className="flex items-center">
          <img
            className="w-8 fill-current text-green-600"
            src="reddit-logo.svg"
            alt="reddit logo"
          />
          <h1 className="pl-2 text-xl font-semibold">
            <span className="font-bold">Reddit</span> Client
          </h1>
        </div>
        <div
          id="search"
          className="flex flex-1 mx-4 max-w-sm relative"
        >
          <input
            type="search"
            placeholder="Search Reddit"
            className="flex-1 border-solid border-2 border-gray-300 rounded-md pl-10 pr-4 py-2"
          ></input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-4 top-3  text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div
          id="dark-mode-toggle"
          className="hidden sm:flex border-solid border-2 border-gray-300 rounded-md divide-x-2 divide-gray-300 divide-solid"
        >
          <div id="light-mode" className="px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </div>
          <div id="dark-mode" className="px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </div>
        </div>
      </div>
    </header>
  );
}
