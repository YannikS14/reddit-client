import React from 'react';
import './App.css';
import Header from './features/header/Header';
import PostList from './features/postList/PostList';
import SubredditList from './features/subredditList/SubredditList';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <Header />
      <main class="container mx-auto pt-20 flex flex-col sm:flex-row">
        <PostList
          posts={[
            {
              title: 'postTitle',
              votes: '35.8k',
              content: 'the content',
              postedBy: 'author',
              publishDate: '8 hours ago',
              commentsAmount: 345,
            },
            {
              title: 'postTitle',
              votes: '35.8k',
              content: 'the content',
              postedBy: 'author',
              publishDate: '8 hours ago',
              commentsAmount: 345,
            },
            {
              title: 'postTitle',
              votes: '35.8k',
              content: 'the content',
              postedBy: 'author',
              publishDate: '8 hours ago',
              commentsAmount: 345,
            },
          ]}
        />
        <SubredditList
          subreddits={[
            {
              icon: 'https://b.thumbs.redditmedia.com/EndDxMGB-FTZ2MGtjepQ06cQEkZw_YQAsOUudpb9nSQ.png',
              title: 'AskReddit',
            },
            {
              icon: 'https://b.thumbs.redditmedia.com/0PgZl68jAxA6T1BH6uvUQ5Bz1F1GrrJLCL8oi2Gz0Ak.png',
              title: 'gaming',
            },
          ]}
        />
      </main>
    </div>
  );
}

export default App;
