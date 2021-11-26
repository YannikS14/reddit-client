import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DarkModeToggle from './DarkModeToggle';
import App from '../../App';

describe('DarkModeToggle component', () => {
  it('should change the theme to light/dark after clicking light/dark button', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByTestId('app-wrapper')).not.toHaveClass('dark');

    userEvent.click(screen.getByTestId('btn-dark-mode'));
    expect(screen.getByTestId('app-wrapper')).toHaveClass('dark');

    userEvent.click(screen.getByTestId('btn-light-mode'));
    expect(screen.getByTestId('app-wrapper')).not.toHaveClass('dark');
  });

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
