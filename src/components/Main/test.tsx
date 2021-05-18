import { screen, render } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />);

    expect(screen.getByRole('heading', { name: /braun boilerplate/i })).toBeInTheDocument();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
