import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Posts from './Posts';

describe('Posts component', () => {
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
