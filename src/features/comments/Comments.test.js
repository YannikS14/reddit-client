import renderer from 'react-test-renderer';
import Comments from './Comments';

describe('Comments component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Comments />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
