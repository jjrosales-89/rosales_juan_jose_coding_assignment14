import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

function renderAppAt(path: string) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

test('renders the portfolio home page', () => {
  renderAppAt('/');

  expect(
    screen.getByRole('heading', {
      level: 1,
      name: /juan josé rosales ortega/i,
    }),
  ).toBeInTheDocument();

  expect(
    screen.getByRole('heading', {
      level: 2,
      name: /basic information/i,
    }),
  ).toBeInTheDocument();
});

test('renders the work page route', () => {
  renderAppAt('/work');

  expect(
    screen.getByRole('heading', {
      level: 1,
      name: /work/i,
    }),
  ).toBeInTheDocument();
});
