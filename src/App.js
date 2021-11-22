import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from './appSlice';
import Header from './features/header/Header';
import Posts from './features/posts/Posts';
import Subreddits from './features/subreddits/Subreddits';

function App() {
  const theme = useSelector(selectTheme);

  return (
    <div className={`App ${theme === 'light' ? '' : 'dark'}`}>
      <div className="bg-gray-100 dark:bg-gray-600 dark:text-gray-50 min-h-screen">
        <Header />
        <main className="container mx-auto pt-24 flex flex-col lg:flex-row">
          <Posts />
          <Subreddits />
        </main>
      </div>
    </div>
  );
}

export default App;
