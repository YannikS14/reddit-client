import renderer from 'react-test-renderer';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '../test-utils';
import Comments from './Comments';

export const handlers = [
  rest.get(
    'https://www.reddit.com/r/*/comments/*',
    (req, res, ctx) => {
      return res.once(
        ctx.json([
          {},
          {
            data: {
              children: [
                {
                  data: {
                    id: '123abc',
                    created: 1626123217,
                    author: 'Testauthor',
                    body: 'This is a test comment body.',
                  },
                },
              ],
            },
          },
        ]),
        ctx.delay(150),
      );
    },
  ),
  rest.get(
    'https://www.reddit.com/r/*/comments/*',
    (req, res, ctx) => {
      return res.networkError('Failed to connect', ctx.delay(150));
    },
  ),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Comments component', () => {
  it('fetches & receives comments', async () => {
    render(<Comments />);

    expect(screen.queryByText(/Testauthor/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/This is a test comment body./i),
    ).not.toBeInTheDocument();

    expect(
      await screen.findByText(/Testauthor/i),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/This is a test comment body./i),
    ).toBeInTheDocument();
  });

  it('renders an error state if comments fetch failed', async () => {
    render(<Comments />);

    expect(
      screen.queryByText(/Cannot display comments.../i),
    ).not.toBeInTheDocument();

    expect(
      await screen.findByText(/Cannot display comments.../i),
    ).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<Comments />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
