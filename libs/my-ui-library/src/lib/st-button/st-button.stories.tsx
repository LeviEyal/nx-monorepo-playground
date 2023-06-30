import type { Meta } from '@storybook/react';
import { StButton } from './st-button';

const Story: Meta<typeof StButton> = {
  component: StButton,
  title: 'StButton',
};
export default Story;

export const Primary = {
  args: {
    children: 'Hello World',
  },
};
