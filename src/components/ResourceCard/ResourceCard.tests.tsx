import { render, screen } from '@testing-library/react';
import ResourceCard from './ResourceCard';

test('renders resource information and an external link', () => {
  render(
    <ResourceCard
      title="React Documentation"
      icon="RE"
      summary="Official documentation for React."
      link="https://react.dev/"
    />,
  );

  expect(
    screen.getByRole('heading', { name: 'React Documentation' }),
  ).toBeInTheDocument();

  expect(
    screen.getByText('Official documentation for React.'),
  ).toBeInTheDocument();

  expect(
    screen.getByRole('link', { name: 'Open React Documentation' }),
  ).toHaveAttribute('href', 'https://react.dev/');
});
