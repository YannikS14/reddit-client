import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Subreddit from './Subreddit';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Subreddits from '../subreddits/Subreddits';

describe('Subreddit component', () => {
  const testSubreddit = {
    icon: 'http://linktoicon.test',
    title: 'Popular',
  };

  it('renders the subreddit data from props', () => {
    render(
      <Provider store={store}>
        <Subreddit subreddit={testSubreddit} />
      </Provider>,
    );
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'http://linktoicon.test',
    );
    expect(screen.getByText('Popular')).toBeInTheDocument();
  });

  it('renders the clicked subreddit as active', async () => {
    render(
      <Provider store={store}>
        <Subreddits>
          <Subreddit />
        </Subreddits>
      </Provider>,
    );

    expect(screen.getAllByRole('button')[0]).toHaveClass(
      'bg-gray-100 dark:bg-gray-600',
    );
    expect(screen.getAllByRole('button')[1]).not.toHaveClass(
      'bg-gray-100 dark:bg-gray-600',
    );

    userEvent.click(screen.getAllByRole('button')[1]);

    expect(screen.getAllByRole('button')[1]).toHaveClass(
      'bg-gray-100 dark:bg-gray-600',
    );
    expect(screen.getAllByRole('button')[0]).not.toHaveClass(
      'bg-gray-100 dark:bg-gray-600',
    );
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Subreddit />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
