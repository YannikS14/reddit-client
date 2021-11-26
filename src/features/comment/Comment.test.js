import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
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
    render(<Comment comment={testComment} />);
    expect(screen.getByText('4 months ago')).toBeInTheDocument();
  });

  it('renders the author of the comment', () => {
    render(<Comment comment={testComment} />);
    expect(screen.getByText('Testauthor')).toBeInTheDocument();
  });

  it('renders the body of the comment', () => {
    render(<Comment comment={testComment} />);
    expect(
      screen.getByText('This is a test comment body.'),
    ).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(<Comment comment={testComment} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
