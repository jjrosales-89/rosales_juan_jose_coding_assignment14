import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

const projectProps = {
  title: 'Example Project',
  description: 'An example project description.',
  imageSrc: '/images/projects/project-placeholder.svg',
  imageAlt: 'Example project preview',
  techList: ['React', 'TypeScript'],
};

test('renders project information and link', () => {
  render(
    <ProjectCard
      {...projectProps}
      link="https://example.com"
      linkLabel="View repository"
    />,
  );

  expect(
    screen.getByRole('heading', { name: 'Example Project' }),
  ).toBeInTheDocument();

  expect(screen.getByText('React')).toBeInTheDocument();
  expect(screen.getByText('TypeScript')).toBeInTheDocument();

  expect(
    screen.getByRole('img', { name: 'Example project preview' }),
  ).toBeInTheDocument();

  expect(screen.getByRole('link', { name: 'View repository' })).toHaveAttribute(
    'href',
    'https://example.com',
  );
});

test('renders a status when no project link is provided', () => {
  render(<ProjectCard {...projectProps} />);

  expect(screen.getByText('Repository unavailable')).toBeInTheDocument();
});
