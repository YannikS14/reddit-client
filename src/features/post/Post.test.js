import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { render, screen, fireEvent } from '../test-utils';
import Post from './Post';

describe('Post component', () => {
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

  it('displays the PostModal component after clicking the button', async () => {
    render(<Post post={testPostMedia} />);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('heading', { level: 2 }));
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
  });

  it('displays the comments after clicking the button', async () => {
    render(<Post post={testPostMedia} />);

    expect(
      screen.queryByTestId('comments-wrapper'),
    ).not.toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('Comments'));
    expect(
      await screen.findByTestId('comments-wrapper'),
    ).toBeInTheDocument();
  });

  it("doesn't render the markdown component, if post text is empty", () => {
    let emptyPostText = testPostMedia;
    emptyPostText.data.selftext = '';

    render(<Post post={emptyPostText} />);
    expect(screen.queryByText('Test Text')).not.toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Post post={testPostMedia} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
