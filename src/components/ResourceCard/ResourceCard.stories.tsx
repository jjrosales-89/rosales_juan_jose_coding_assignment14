import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ResourceCard from './ResourceCard';

const meta: Meta<typeof ResourceCard> = {
  title: 'Portfolio/ResourceCard',
  component: ResourceCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ResourceCard>;

export const Default: Story = {
  args: {
    title: 'MDN Web Docs',
    icon: 'MDN',
    summary:
      'A reference for HTML, CSS, JavaScript, accessibility, and browser APIs.',
    link: 'https://developer.mozilla.org/',
  },
};
