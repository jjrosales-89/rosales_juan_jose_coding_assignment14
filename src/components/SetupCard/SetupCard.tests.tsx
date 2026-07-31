import { render, screen } from '@testing-library/react';
import SetupCard from './SetupCard';

test('renders setup information and a code snippet', () => {
  render(
    <SetupCard
      title="Terminal Setup"
      description="My terminal configuration."
      items={['PowerShell', 'Git', 'Docker']}
      codeSnippet="npm run quality"
    />,
  );

  expect(
    screen.getByRole('heading', { name: 'Terminal Setup' }),
  ).toBeInTheDocument();

  expect(screen.getByText('PowerShell')).toBeInTheDocument();
  expect(screen.getByText('Git')).toBeInTheDocument();
  expect(screen.getByText('Docker')).toBeInTheDocument();
  expect(screen.getByText('npm run quality')).toBeInTheDocument();
});

test('does not create a code block when no snippet is provided', () => {
  const { container } = render(
    <SetupCard
      title="Editor"
      description="My editor setup."
      items={['Visual Studio Code']}
    />,
  );

  expect(container.querySelector('pre')).not.toBeInTheDocument();
});
