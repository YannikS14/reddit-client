import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '../test-utils';
import Posts from './Posts';

export const handlers = [
  rest.get('https://www.reddit.com/r/*', (req, res, ctx) => {
    return res.once(
      ctx.json({
        data: {
          children: [
            {
              data: {
                created: 1635454,
                ups: 145668,
                num_comments: 123,
                post_hint: 'image',
                url: 'https://linktoimage.test',
                is_video: true,
                media: {
                  reddit_video: {
                    fallback_url: 'https://linktovideo.test',
                  },
                },
                selftext: 'Test Text',
                title: 'Test Title',
                author: 'Test author',
                subreddit: 'Testsubreddit',
                id: '123abc',
              },
            },
          ],
        },
      }),
      ctx.delay(150),
    );
  }),
  rest.get('https://www.reddit.com/r/*', (req, res, ctx) => {
    return res.networkError('Failed to connect', ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Posts component', () => {
  it('fetches & receives posts', async () => {
    render(<Posts />);

    expect(screen.queryByText(/Test Text/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Test Title/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Test author/i),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/123/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/145.7k/i)).not.toBeInTheDocument();

    expect(await screen.findByText(/Test Text/i)).toBeInTheDocument();
    expect(screen.queryByText(/Test Title/i)).toBeInTheDocument();
    expect(screen.queryByText(/Test author/i)).toBeInTheDocument();
    expect(screen.queryByText(/123/i)).toBeInTheDocument();
    expect(screen.queryByText(/145.7k/i)).toBeInTheDocument();
  });

  it('renders an error state if posts fetch failed', async () => {
    render(<Posts />);

    expect(
      screen.queryByText(/Cannot display posts.../i),
    ).not.toBeInTheDocument();

    expect(
      await screen.findByText(/Cannot display posts.../i),
    ).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Posts />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
