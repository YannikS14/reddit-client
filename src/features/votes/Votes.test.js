import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '../test-utils';
import Votes from './Votes';

describe('Votes component', () => {
  it('toggles the upvote arrow classes after clicking the upvote button', async () => {
    render(<Votes votes="123" isLoading={false} />);

    expect(screen.getByTestId('upvote-arrow')).not.toHaveClass(
      'text-green-500 scale-125',
    );

    fireEvent.click(screen.getByLabelText('upvote'));
    expect(await screen.findByTestId('upvote-arrow')).toHaveClass(
      'text-green-500 scale-125',
    );

    fireEvent.click(screen.getByLabelText('upvote'));
    expect(await screen.findByTestId('upvote-arrow')).not.toHaveClass(
      'text-green-500 scale-125',
    );
  });

  it('toggles the downvote arrow classes after clicking the downvote button', async () => {
    render(<Votes votes="123" isLoading={false} />);

    expect(screen.getByTestId('downvote-arrow')).not.toHaveClass(
      'text-red-500 scale-125',
    );

    fireEvent.click(screen.getByLabelText('downvote'));
    expect(await screen.findByTestId('downvote-arrow')).toHaveClass(
      'text-red-500 scale-125',
    );

    fireEvent.click(screen.getByLabelText('downvote'));
    expect(
      await screen.findByTestId('downvote-arrow'),
    ).not.toHaveClass('text-red-500 scale-125');
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(<Votes votes="123" isLoading={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
