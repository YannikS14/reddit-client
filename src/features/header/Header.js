import React from 'react';
import SearchField from '../searchField/SearchField';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';

export default function Header() {
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
        <DarkModeToggle />
      </div>
    </header>
  );
}
