import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';
import { store } from './app/store';
import Header from './features/header/Header';
import Posts from './features/posts/Posts';
import Subreddits from './features/subreddits/Subreddits';

describe('App component', () => {
  it('renders a <Header /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('renders a <Posts /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Posts)).toHaveLength(1);
  });

  it('renders a <Subreddits /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Subreddits)).toHaveLength(1);
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
