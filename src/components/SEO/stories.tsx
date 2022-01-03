import { Story, Meta } from '@storybook/react/types-6-0';

import { SEO } from '.';

export default {
  title: 'SEO',
  component: SEO,
  args: {
    title: 'title default',
    description: 'description default',
  },
} as Meta;

export const Standard: Story = (args) => <SEO {...args} />;
