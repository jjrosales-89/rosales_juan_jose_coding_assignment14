import { render, screen } from '@testing-library/react';
import SkillGroup from './SkillGroup';

test('renders a skill group with its description and skills', () => {
  render(
    <SkillGroup
      title="Languages"
      description="Programming languages used in my projects."
      skills={['JavaScript', 'TypeScript', 'Python']}
    />,
  );

  expect(
    screen.getByRole('heading', { name: 'Languages' }),
  ).toBeInTheDocument();

  expect(
    screen.getByText('Programming languages used in my projects.'),
  ).toBeInTheDocument();

  expect(screen.getByText('JavaScript')).toBeInTheDocument();
  expect(screen.getByText('TypeScript')).toBeInTheDocument();
  expect(screen.getByText('Python')).toBeInTheDocument();
});
