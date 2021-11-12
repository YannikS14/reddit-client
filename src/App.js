import React from 'react';
import './App.css';
import Header from './features/header/Header';
import Posts from './features/posts/Posts';
import Subreddits from './features/subreddits/Subreddits';

function App() {
  return (
    <div className="App bg-gray-100 dark:bg-gray-600 dark:text-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto pt-24 flex flex-col lg:flex-row">
        <Posts />
        <Subreddits />
      </main>
    </div>
  );
}

export default App;
