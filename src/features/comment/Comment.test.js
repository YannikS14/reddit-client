import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Comment from './Comment';

describe('Comment component', () => {
  const testComment = {
    data: {
      created: 1626123217,
      author: 'Testauthor',
      body: 'This is a test comment body.',
    },
  };

  it('renders the creation date of the comment', () => {
    const wrapper = shallow(<Comment comment={testComment} />);
    const text = wrapper.find('div.text-xs').text();
    expect(text).toEqual('4 months ago');
  });

  it('renders the author of the comment', () => {
    const wrapper = shallow(<Comment comment={testComment} />);
    const text = wrapper.find('div.font-semibold.text-sm').text();
    expect(text).toEqual(testComment.data.author);
  });

  it('renders the body of the comment', () => {
    const wrapper = shallow(<Comment comment={testComment} />);
    const text = wrapper.find('p').text();
    expect(text).toEqual(testComment.data.body);
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(<Comment comment={testComment} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
