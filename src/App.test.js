import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';

describe('App', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  it('initially renders with light mode', () => {
    expect(screen.getByTestId('app-wrapper')).not.toHaveClass('dark');
  });

  it('renders a <Header /> component', () => {
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders a <Posts /> component', () => {
    expect(screen.getByLabelText('posts')).toBeInTheDocument();
  });

  it('renders a <Subreddits /> component', () => {
    expect(screen.getByLabelText('subreddits')).toBeInTheDocument();
  });
});
