import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import DarkModeToggle from './DarkModeToggle';

describe('DarkModeToggle component', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <DarkModeToggle />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
