import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Subreddits from './Subreddits';

describe('Subreddits component', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Subreddits />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
