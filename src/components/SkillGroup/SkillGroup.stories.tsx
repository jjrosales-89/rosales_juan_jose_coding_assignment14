import type { Meta, StoryObj } from '@storybook/react-webpack5';
import SkillGroup from './SkillGroup';

const meta: Meta<typeof SkillGroup> = {
  title: 'Portfolio/SkillGroup',
  component: SkillGroup,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SkillGroup>;

export const Default: Story = {
  args: {
    title: 'Languages',
    description:
      'Programming and scripting languages used throughout my projects.',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'Python'],
  },
};
