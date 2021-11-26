import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchField from './SearchField';

describe('SearchField component', () => {
  it('should update and display the value of the search input field', () => {
    render(
      <Provider store={store}>
        <SearchField />
      </Provider>,
    );
    expect(screen.getByRole('searchbox')).toHaveTextContent('');

    userEvent.type(screen.getByRole('searchbox'), 'Test Search');
    expect(screen.getByRole('searchbox')).toHaveValue('Test Search');

    userEvent.clear(screen.getByRole('searchbox'));
    expect(screen.getByRole('searchbox')).toHaveTextContent('');
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <SearchField />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
