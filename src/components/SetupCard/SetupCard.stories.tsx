import type { Meta, StoryObj } from '@storybook/react-webpack5';
import SetupCard from './SetupCard';

const meta: Meta<typeof SetupCard> = {
  title: 'Portfolio/SetupCard',
  component: SetupCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SetupCard>;

export const Default: Story = {
  args: {
    title: 'Terminal Setup',
    description: 'PowerShell is my primary terminal environment on Windows.',
    items: ['PowerShell', 'Git', 'Node.js', 'npm', 'Docker Desktop'],
    codeSnippet: `npm ci
npm run quality
npm start`,
  },
};

export const WithoutCodeSnippet: Story = {
  args: {
    title: 'Editor Setup',
    description: 'Visual Studio Code is my primary code editor.',
    items: ['ESLint', 'Prettier', 'GitLens'],
  },
};
