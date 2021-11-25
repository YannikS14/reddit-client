import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostModal from './PostModal';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe('PostModal component', () => {
  const testPostMedia = {
    data: {
      created: 1635454,
      ups: 123456,
      num_comments: 123,
      post_hint: 'image',
      url: 'https://linktoimage.test',
      is_video: true,
      media: {
        reddit_video: { fallback_url: 'https://linktovideo.test' },
      },
      selftext: 'Test Text',
      title: 'Test Title',
      author: 'Test author',
      subreddit: 'Testsubreddit',
      id: '123abc',
    },
  };

  const testPostLink = {
    data: {
      created: 1635454,
      ups: 123456,
      num_comments: 123,
      post_hint: 'link',
      url: 'https://linktocontent.test',
      is_video: true,
      media: {
        reddit_video: { fallback_url: 'https://linktovideo.test' },
      },
      selftext: 'Test Text',
      title: 'Test Title',
      author: 'Test author',
      subreddit: 'Testsubreddit',
      id: '123abc',
    },
  };

  it('renders a PostModal wrapper div', () => {
    render(
      <Provider store={store}>
        <PostModal post={testPostLink} />
      </Provider>,
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('shows an error if no post prop is passed', () => {
    render(
      <Provider store={store}>
        <PostModal />
      </Provider>,
    );
    expect(
      screen.getByText("Couldn't load post"),
    ).toBeInTheDocument();
  });

  it('renders all post content for a media type post', async () => {
    render(
      <Provider store={store}>
        <PostModal post={testPostMedia} />
      </Provider>,
    );

    expect(await screen.findByRole('img')).toHaveAttribute(
      'src',
      'https://linktoimage.test',
    );

    expect(screen.getByText('Test Text')).toBeInTheDocument();
    expect(screen.getByText('Test author')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByText('123.5k')).toBeInTheDocument();
    expect(screen.getByText('52 years ago')).toBeInTheDocument();
  });

  it('renders all post content for a link type post', () => {
    render(
      <Provider store={store}>
        <PostModal post={testPostLink} />
      </Provider>,
    );

    expect(screen.getByTestId('post-link')).toHaveAttribute(
      'href',
      'https://linktocontent.test',
    );

    expect(screen.getByText('Test Text')).toBeInTheDocument();
    expect(screen.getByText('Test author')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByText('123.5k')).toBeInTheDocument();
    expect(screen.getByText('52 years ago')).toBeInTheDocument();
  });

  it('calls the toggleModal function passed in props', () => {
    const mockToggleModal = jest.fn(() => {});

    render(
      <Provider store={store}>
        <PostModal
          post={testPostLink}
          toggleModal={mockToggleModal}
        />
      </Provider>,
    );

    userEvent.click(screen.getByRole('heading', { level: 2 }));

    expect(mockToggleModal).toHaveBeenCalled();
  });

  // TODO: Upvote / Downvote Button testen
});
