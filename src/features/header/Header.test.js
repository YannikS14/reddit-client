import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Header from './Header';

describe('Header component', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Header />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
