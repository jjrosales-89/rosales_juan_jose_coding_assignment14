import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ProjectCard from './ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  title: 'Portfolio/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    title: 'UI Garden Component Library',
    description:
      'A reusable React and TypeScript component library documented with Storybook.',
    imageSrc: '/images/projects/project-placeholder.svg',
    imageAlt: 'UI Garden project preview',
    techList: ['React', 'TypeScript', 'Storybook', 'Jest'],
    link: 'https://github.com/jjrosales-89/rosales_juan_jose_ui_garden',
    linkLabel: 'View repository',
  },
};

export const WithoutLink: Story = {
  args: {
    ...Default.args,
    title: 'Project Without Link',
    link: undefined,
  },
};
